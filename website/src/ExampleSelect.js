import { useState } from "react";
// Import all next stages that can be selected

function Exampleselect() {
  const [selection, setSelection] = useState(0);

  // This links to the next stage. It can be text here or in other file
  function SwitchCase() {
    switch (selection) {
      case 1:
        return <p>This is case 1</p>;
      case 2:
        return <p>This is case 2</p>;
      case 3:
        return <p>This is case 3 </p>;
      default:
        return <p>default case</p>;
    }
  }

  return (
    <>
      <label>
        Select option
        <select
          className="select"
          onChange={(e) => setSelection(parseInt(e.target.value))}
        >
          {/* Options added here must match SwitchCase to be used*/}
          <option value="0">- Standard not selected -</option>
          <option value="1">Option one</option>
          <option value="2">Option two</option>
          <option value="3">Option three</option>
        </select>
      </label>
      <>
        <SwitchCase />
      </>
    </>
  );
}

export default Exampleselect;
