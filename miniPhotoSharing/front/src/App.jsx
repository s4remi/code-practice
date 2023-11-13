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
  const photos = [{ url: "", caption: "" }];
  function renderPhotos() {
    return <div>{photos.map()}</div>;
  }
  return (
    <div>
      <AppNavBar />
      <h1>Photo Sharing</h1>
      <h2>Photos</h2>
      {renderPhotos()}
      <AppFooter />
    </div>
  );
}
//
