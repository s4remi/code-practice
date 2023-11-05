export default function TabButton(props) {
  // add event listener
  function clickHandle() {
    console.log("hello world!");
  }

  return (
    <li>
      <button onClick={clickHandle}>{props.children}</button>
    </li>
  );
}
