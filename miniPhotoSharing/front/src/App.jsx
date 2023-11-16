import { AppNavBar } from "./layout/AppNavBar";
import { AppFooter } from "./layout/AppFooter";
import { ButtonVote } from "./components/ButtonVote";
import { PhotosGallery } from "./components/PhotosGallery";
import { useState, useEffect, useRef } from "react";

function SearchBar02() {
  const refSearch = useRef();
  function onInput(evt) {
    console.log("SearchBar OnInput", refSearch.current.value);
    //setQuery(evt.target.value);
  }
  return (
    <div>
      <label className="form-label">
        Search:{" "}
        <input
          ref={refSearch}
          className="form-control"
          type="search"
          onInput={onInput}
        ></input>
      </label>
    </div>
  );
}

function SearchBar() {
  let [query, setQuery] = useState("");

  function onInput(evt) {
    console.log("SearchBar OnInput", evt.target.value);
    setQuery(evt.target.value);
  }
  return (
    <div>
      <label className="form-label">
        Search:{" 36:52 min"}
        <input
          className="form-control"
          type="text"
          onInput={onInput}
          value={query}
        />
      </label>
    </div>
  );
}

function RangeWidth() {
  let [width, setWidth] = useState(10);
  function onInput(evt) {
    setWidth(+evt.target.value);
  }
  return (
    <>
      <label>
        <input
          type="range"
          min="40"
          max="300"
          value={width}
          onInput={onInput}
        />
        <output>value {width}</output>
      </label>
    </>
  );
}

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

      <RangeWidth width={10} />
      <SearchBar />
      <PhotosGallery photos={photos} />
      <ButtonVote name="ali" />
      <ButtonVote name="john" />
      <AppFooter />
    </div>
  );
}
