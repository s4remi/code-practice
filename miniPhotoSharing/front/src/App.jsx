import { AppNavBar } from "./layout/AppNavBar";
import { AppFooter } from "./layout/AppFooter";
import { ButtonVote } from "./components/ButtonVote";
import { PhotosGallery } from "./components/PhotosGallery";

export default function App() {
  //basic test to see if we can see the data from the back
  async function testBack() {
    console.log("Testing back ....");
    const response = await fetch("/api/photos");
    const data = await response.json();
    console.log("Got data!", data);
  }
  testBack();
  // we can have default variables
  const photos = [
    { url: "test", caption: "cap1" },
    { url: "test", caption: "cap2" },
  ];
  return (
    <div>
      <AppNavBar />
      <h1>Photo Sharing</h1>
      <PhotosGallery photos={photos} />
      <ButtonVote name="ali" />
      <ButtonVote name="john" />
      <AppFooter />
    </div>
  );
}
