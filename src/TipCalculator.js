import { useState } from "react";
import { Reset } from "./Reset";
import { DisplayTotal } from "./DisplayTotal";
import { DropDown } from "./DropDown";
import { BillAmount } from "./BillAmount";

export function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [yourTip, setYourTip] = useState("");
  const [friendTip, setFriendTip] = useState("");

  function finalTotalCalc() {
    const average = (Number(yourTip) + Number(friendTip)) / 2;
    const tipTotal = (Number(billAmount) * average) / 100;
    return (Number(billAmount) + tipTotal).toFixed(2);
  }

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
      <DisplayTotal finalTotal={finalTotalCalc} />
      <Reset onReset={handleReset} />
    </div>
  );
}
