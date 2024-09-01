import './Instructions.css'
const Instructions = () => {
    const InstructionsButton = () => {
      alert("When the timer strikes 0 make sure surroundings are silent or the experience will be ruined! and I will be sad :(")
    }
    return(
      <button className="InstructionsButton" onClick={InstructionsButton}>Instructions</button>
    );
  }

  export default Instructions;