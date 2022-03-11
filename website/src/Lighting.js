import { useState } from "react";
import {LED, NaturalLight, Solar} from "./Industry";
import Heating from "./Heating";
// Import all next stages that can be selected

function Lighting() {
    const [sel1, setSelection ] = useState(0);

    // This links to the next stage. It can be text here or in other file
    function SwitchCase() {
        switch (sel1) {
            case 1:
                return <> <NaturalLight /> <Solar /> <Heating /> </>;
            case 2:
                return <> <LED /> <Solar /> <Heating /> </>;
            case 3:
                return <> <LED /> <NaturalLight />  <Solar /> <Heating /> </>;
            default:
                return <> </>;
        }
    }

    return (
        <>
            <label>
                What lighting solution do you use ?
                <select
                    className="select"
                    onChange={(e) => setSelection(parseInt(e.target.value))}
                >
                    {/* Options added here must match SwitchCase to be used*/}
                    <option value="0">- Standard not selected -</option>
                    <option value="1">LED</option>
                    <option value="2">Natural Lighting</option>
                    <option value="3">Other</option>
                </select>
            </label>
            <>
                <SwitchCase />
            </>
        </>
    );
}

export default Lighting;
