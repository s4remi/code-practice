export default function TabButton({ children, onSelect }) {
  // add event listener
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
