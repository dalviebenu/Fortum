import { useState } from "react";
import {LED, NaturalLight, Solar, SmartVentilation} from "./Industry";
// Import all next stages that can be selected

function Lighting() {
    const [sel1, setSelection ] = useState(0);

    // This links to the next stage. It can be text here or in other file
    function SwitchCase() {
        switch (sel1) {
            case 1:
                return <>  </>;
            case 2:
                return <> <SmartVentilation /> </>;
            default:
                return <> </>;
        }
    }

    return (
        <>
            <label>
                What ventilation solution do you use if any?
                <select
                    className="select"
                    onChange={(e) => setSelection(parseInt(e.target.value))}
                >
                    {/* Options added here must match SwitchCase to be used*/}
                    <option value="0">- Standard not selected -</option>
                    <option value="1">HVAC</option>
                    <option value="2">None</option>
                </select>
            </label>
            <>
                <SwitchCase />
            </>
        </>
    );
}

export default Lighting;
