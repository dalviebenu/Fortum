import { useState } from "react";
import {Laptops, Remote, Server} from "./Industry";
import Heating from "./Heating";
import Lighting from "./Lighting";
// Import all next stages that can be selected

function IT() {
    const [sel1, setSelection ] = useState(0);

    // This links to the next stage. It can be text here or in other file
    function SwitchCase() {
        switch (sel1) {
            case 1:
                return <> <Server />  </>;
            case 2:
                return <> <Remote /> <Laptops /> <Lighting /> </>;
            default:
                return <> </>;
        }
    }

    return (
        <>
            <label>
                Does your IT company use servers extensively ?
                <select
                    className="select"
                    onChange={(e) => setSelection(parseInt(e.target.value))}
                >
                    {/* Options added here must match SwitchCase to be used*/}
                    <option value="0">- Standard not selected -</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
            </label>
            <>
                <SwitchCase />
            </>
        </>
    );
}

export default IT;
