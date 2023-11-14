import { AppNavBar } from "./layout/AppNavBar";
import { AppFooter } from "./layout/AppFooter";
import { ButtonVote } from "./components/ButtonVote";
import { PhotosGallery } from "./components/PhotosGallery";
import { useState, useEffect } from "react";

export default function App() {
  let [photos, setPhotos] = useState([]);
  //basic test to see if we can see the data from the back
  async function testBack() {
    console.log("Testing back ....");
    const response = await fetch("/api/photos");
    const data = await response.json();
    console.log("Got data!", data);
    setPhotos(data);
  }
  useEffect(() => {
    testBack();
    return () => {
      //clean up for the effect
    };
  }, []); //when we pass the empty array it means it run once

  // we can have default variables
  // photos = [
  //   { url: "test", caption: "cap1" },
  //   { url: "test", caption: "cap2" },
  // ];
  console.log("Render App photos=", photos);
  return (
    <div>
      <AppNavBar />
      <h1>Photo Sharing</h1>
      <PhotosGallery photos={photos.slice(30, 47)} />
      <ButtonVote name="ali" />
      <ButtonVote name="john" />
      <AppFooter />
    </div>
  );
}
