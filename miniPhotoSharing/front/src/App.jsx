import { AppNavBar } from "./layout/AppNavBar";
import { AppFooter } from "./layout/AppFooter";

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
      <AppNavBar />
      <h1>Photo Sharing</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        pariatur tenetur impedit exercitationem, excepturi sint dolores nulla
        voluptas provident, iusto nihil et ullam cumque amet voluptates fugit
        eio!
      </div>
      <AppFooter />
    </div>
  );
}
//
