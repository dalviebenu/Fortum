import { useState } from "react";
import {Insulation, IoT, SmartBuilding} from "./Industry";
import Ventilation from "./Ventilation";
// Import all next stages that can be selected

function Lighting() {
    const [sel1, setSelection ] = useState(0);

    // This links to the next stage. It can be text here or in other file
    function SwitchCase() {
        switch (sel1) {
            case 1:
                return <> <IoT /> <SmartBuilding /> <Ventilation /></>;
            case 2:
                return <> <Insulation /> <SmartBuilding /> <Ventilation /></>;
            case 3:
                return <> <Insulation /> <IoT /> <Ventilation /></>;
            default:
                return <> </>;
        }
    }

    return (
        <>
            <label>
                Which of these do you use in your heating solution ?
                <select
                    className="select"
                    onChange={(e) => setSelection(parseInt(e.target.value))}
                >
                    {/* Options added here must match SwitchCase to be used*/}
                    <option value="0">- Standard not selected -</option>
                    <option value="1">Insulation</option>
                    <option value="2">IoT devices</option>
                    <option value="3">Smart Building</option>
                </select>
            </label>
            <>
                <SwitchCase />
            </>
        </>
    );
}

export default Lighting;
