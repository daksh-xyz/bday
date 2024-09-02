import './Instructions.css'
const Instructions = () => {
    const InstructionsButton = () => {
      alert("Step1: Turn the fan off like you would with a real cake :)\nStep2: Stop talking if the mic is really sensitive\nStep3: Click on the cake to add candles\nStep4: Blow!")
    }
    return(
      <button className="InstructionsButton" onClick={InstructionsButton}>Instructions</button>
    );
  }

  export default Instructions;