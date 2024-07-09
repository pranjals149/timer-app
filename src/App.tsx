import React from "react";
import { useTimer } from "./hooks/useTimer";

const App: React.FC = () => {
  const { counter, started, start, pause, reset } = useTimer();

  return (
    <div>
      <div>{counter}</div>
      <div className="buttons">
        <button onClick={started ? pause : start}>
          {started ? "Pause" : "Start"}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
