export function DisplayTotal({ finalTotal, tip, bill }) {
  return (
    <div>
      <h1>You pay £{finalTotal()} (£{bill} + £{tip})</h1>
    </div>
  );
}
