export default function App() {
  //basic test to see if we can see the data from the back
  async function testBack() {
    console.log("Testing back ....");
    const response = await fetch("/api/photos");
    const data = await response.json();
    console.log("Got data!", data);
  }
  testBack();
  return (
    <div>
      <h1>\tHello! World! </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        pariatur tenetur impedit exercitationem, excepturi sint dolores nulla
        voluptas provident, iusto nihil et ullam cumque amet voluptates fugit
        eio!
      </p>
    </div>
  );
}
