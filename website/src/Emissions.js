import { useState } from "react";
import Car from "./images/car.png";
import Path from "./images/path.png";

function Emissions() {
  const [button, setButton] = useState(false);
  const [input, setInput] = useState({});
  const [text, setText] = useState("");
  const divStyle = {
        height:200,
        whiteSpace: 'pre-wrap'
  };
  const test2 = `{
              "Name":"Diesel",
              "Quantity":"10",
              "Unit":"Tonnes"
}`;
  var co2;

  async function handleButton() {
    setButton(!button);
      try {
      console.log(text);
      const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: text
      };
      const response = await fetch("http://127.0.0.1:5000/api", requestOptions);
      var jsonResponse = await response.json();
      setInput(jsonResponse);
      console.log(input);
    } catch (error) {
      return [];
    }
  }
  // dummy json data

    const Calc = () => {
    co2 = input.emission_value;
    return <p>{co2} Kilograms of Carbon Dioxide.</p>;
  };

  const Dist = () => {
    var km = co2 / 0.182;
    var NYtoLA = km / 4489;
    var lifetime = km / 320000;
    return (
      <>
        <p>This would equal driving a car {km.toFixed(0)} kilometers.</p>
        <p>
          Which would be the same as driving the average car from New York to
          Los Angeles {NYtoLA.toFixed(1)} times.
        </p>
        <p>
          Or how much {lifetime.toFixed(1)} cars drive through their lifetime.
        </p>
        <img src={Car} alt="Car" width="20%" />
        <img src={Path} alt="Path" width="50%" />
      </>
    );
  };

  return (
    <>
      <textarea type="text" style={divStyle} defaultValue={test2} onChange={(e) => setText(e.target.value)}>

      </textarea>
      <button onClick={(e) => handleButton()}>
        {button ? <>Click to remove data</> : <>Click to add data</>}
      </button>
      {button ? <Calc></Calc> : <></>}
      {button ? <Dist></Dist> : <></>}
    </>
  );
}

/* diesel in production emits 3160 kg/tonne of CO2.
So if we have a quantity of diesel in tonnes we can 
multiply that by 3160 to get CO2 in kg */

export default Emissions;
