import { useState } from "react";
export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [billAmount, setBillAmount] = useState(0);
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const average = (Number(yourTip) + Number(friendTip)) / 2;
  const tipTotal = Number(billAmount * average) / 100;
  const finalTotal = Number(billAmount) + Number(tipTotal);

  function handleReset() {
    const resetConfirmed = window.confirm("Are you sure you want to reset?");

    if (resetConfirmed) {
      setBillAmount(0);
      setYourTip(0);
      setFriendTip(0);
    }
  }

  return (
    <div>
      <BillAmount billAmount={billAmount} onBillAmountEntered={setBillAmount} />
      <DropDown
        text={"How did you rate the service?"}
        onTipEntered={setYourTip}
      />
      <DropDown
        text={"How did your friend rate the service?"}
        onTipEntered={setFriendTip}
      />
      <DisplayTotal total={finalTotal} />
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillAmount({ billAmount, onBillAmountEntered }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={billAmount}
        onChange={(e) => onBillAmountEntered(e.target.value)}
      />
    </div>
  );
}

function DropDown({ text, onTipEntered }) {
  return (
    <div>
      <label>{text}</label>
      <form>
        <select onChange={(e) => onTipEntered(e.target.value)}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was OK (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Amazing (20%)</option>
        </select>
      </form>
    </div>
  );
}

function DisplayTotal({ total }) {
  return (
    <div>
      <h1>You pay {total}</h1>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
