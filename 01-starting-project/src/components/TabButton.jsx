export default function TabButton({ children, onSelect, isSelected }) {
  // add event listener
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
