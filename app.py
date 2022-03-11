from flask import Flask, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import datetime
import os
app = Flask(__name__)
CORS(app)

file_path = os.path.abspath(os.getcwd()) + "/database.db"
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///' + file_path
db = SQLAlchemy(app)
EF_DATA = {"Diesel": {"Unit": "Tonnes", "emission_unit": "kg", "emission_type": "CO2", "emission_factor": 3160}}


class User(db.Model):  # Only CO2 emissions taken into account
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(20))
    name = db.Column(db.String(50))
    item_quantity = db.Column(db.Integer)
    emission_value = db.Column(db.Integer)


@app.route("/")
def default():
    return "An API to convert invoices to emissions. Uses EEA EFDB, currently only support diesel in tonnes."


def response(status: str, message: str, content: dict, emission_value=None, emission_gas=None, emission_unit=None):
    ret = {
        "success": status,
        "response": message,
        "request": content
    }

    if emission_value is not None:
        ret["emission_value"] = emission_value
        ret["emission_gas"] = emission_gas
        ret["emission_unit"] = emission_unit

    return ret


@app.route("/api", methods=["POST", "GET"])
def api():
    """
    Expect data in json format. Required keys are Name, Quantity, Unit and (optional) Price.
    :return: Will send a json response back on success confirming sent data as well as emission conversion.
    Will return BadRequest if data is not of type JSON.
    """

    if request.method == "POST":
        content = request.get_json(force=True)  # "Force = True" bypasses the application/json header requirement.
        name = content["Name"]
        quantity = int(content["Quantity"])
        unit = content["Unit"]

        if (name or quantity or unit) is None:
            return response("false", "Request invalid. check name, quantity and unit exist", content)

        if name not in EF_DATA:
            return response("false", name + " is not supported", content)

        data = EF_DATA[name]

        if unit != data["Unit"]:
            return response("false",
                            "Unit for " + name + " is not supported. Convert to " + data["Unit"],
                            content)

        emission = quantity * int(data["emission_factor"])

        item = User(date=datetime.datetime.now().strftime("%d-%b-%Y (%H:%M:%S.%f)"), name=name, item_quantity=quantity, emission_value=emission)
        db.session.add(item)
        db.session.commit()

        return response("true", "emissions calculated and stored", content, emission_value=int(emission),
                        emission_gas=data["emission_type"], emission_unit=data["emission_unit"])

    else:

        total = 0

        for user in User.query.all():  # All emissions assumed to be CO2
            total += user.emission_value

        return {"amount": total}


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
