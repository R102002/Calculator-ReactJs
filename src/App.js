import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const allowedChars = /[0-9+\-*/.]/;
    if (!allowedChars.test(e.target.name)) {
      window.alert("Special characters and text are not allowed.");
      return;
    }
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const deleteScreen = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      if (result === "") {
        window.alert("Input cannot be empty");
        return;
      }

      const operators = /[+\-*/]/;
      const lastChar = result.charAt(result.length - 1);
      if (operators.test(lastChar)) {
        window.alert("Incomplete input");
        return;
      }

      try {
        eval(result);
      } catch (err) {
        window.alert("Invalid input");
        return;
      }

      if (result.includes("/0")) {
        window.alert("Division by zero is not allowed");
        return;
      }

      setResult(eval(result).toString());
    } catch (err) {
      setResult("Syntax Error");
    }
  };

  const handleKeyboardInput = (e) => {
    const allowedChars = /[0-9+\-*/.=]/;
    if (!allowedChars.test(e.key)) {
      window.alert("Special characters and text are not allowed.");
      e.preventDefault();
      return;
    }
    if (e.key === "=" || e.key === "Enter") {
      e.preventDefault();
      calculate();
    } else {
      setResult(result.concat(e.key));
    }
  };

  return (
    <div className="container" onKeyDown={handleKeyboardInput} tabIndex="0">
      <form>
        <input className="current-operand output" type={"text"} value={result} />
      </form>
      <div className="buttons">
        <button className="ac span-two" onClick={clear}>
          AC
        </button>
        <button onClick={deleteScreen}>Del</button>
        <button name="/" onClick={handleClick}>
          &divide;
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button className="span-two" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;

