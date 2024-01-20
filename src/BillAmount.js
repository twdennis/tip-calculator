export function BillAmount({ billAmount, onBillAmountEntered }) {
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
