import { useState } from "react";
import Exampleselect from "./ExampleSelect";
import Lighting from "./Lighting.js";
import {Production, Remote, Laptops} from "./Industry.js";
import IT from "./IT";

function FirstSelection() {
  const [selection, setSelection] = useState(0);

  function SwitchCase() {
    switch (selection) {
      case 1:
        return <> <Production /> <Lighting /> </>;
      case 2:
        return <> <Remote /> <Laptops /> <Lighting /> </>;
      case 3:
        return <> <IT />  </>;
      default:
        return <> </>;
    }
  }

  return (
    <>
      <label>
        Which option describes your company the best ?
        <select
          className="select"
          name="FristSelection"
          id="FirstSelection"
          onChange={(e) => setSelection(parseInt(e.target.value))}
        >
          <option value="0">- Select -</option>
          <option value="1">Industry</option>
          <option value="2">Office</option>
          <option value="3">IT</option>
        </select>
      </label>
      <>
        <SwitchCase />
      </>
    </>
  );
}

export default FirstSelection;
