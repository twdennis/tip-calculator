export function DropDown({ text, onTipEntered }) {
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
