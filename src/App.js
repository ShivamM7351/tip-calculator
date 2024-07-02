import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function onResetButton() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSetPer={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSetPer={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onResetButton={onResetButton} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSetPer }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSetPer(+e.target.value)}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was ok(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      Pay you ${bill + tip} (${bill} - ${tip} tip)
    </h3>
  );
}

function Reset({ onResetButton }) {
  return <button onClick={onResetButton}>Reset</button>;
}
