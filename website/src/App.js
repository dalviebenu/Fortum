import "./App.css";
import Emissions from "./Emissions.js";
import FirstSelection from "./FirstSelection";

/* 
className wrapper is made for columns of content. By changing the CSS we can 
change how many columns. Removing wrapper would change it back to single.

className item centers the content while leaving it with a small margin.
*/

function App() {
  return (
    <>
      <div className="header">
        <h1>TITLE</h1>
        Developed by a group of students at KTH
      </div>
      <div className="wrapper">
        <p>
          This is an application that will try to help companies visalize their
          carbon dioxide emissions. This is a proof of concept where the idea is
          that the user can provide data using their accounting APIs. As of
          right now it only calculates the use of diesel in an industrial
          setting in tonnes.
        </p>
        <Emissions></Emissions>
          <FirstSelection></FirstSelection>
      </div>
      <div className="about">
        <div className="about-text">
          about us
          <p>
            This is a project made as part of the course Sustainable
            Development, ICT and innovation at the Royal Institute of Technology
            (KTH). The project is made in cooperation with Fortum with the goal
            of somehow helping cooperations to acheive their sustainability
            goals.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
