import { AppNavBar } from "./layout/AppNavBar";
import { AppFooter } from "./layout/AppFooter";

function PhotosGallery(props) {
  function renderPhoto(d, i) {
    // i is index in here, using it as key for map
    return (
      <div key={`phot_${i}`}>
        <img src={d.url} alt={d.caption} />
        <div>{d.caption}</div>
      </div>
    );
  }
  function renderPhotos() {
    return <div>{props.photos.map(renderPhoto)}</div>;
  }
  console.log("Render photos Gallery props= ", props);
  return (
    <div className="photoGallery">
      {" "}
      <h2>PHOTOS</h2>
      <div>{renderPhotos()}</div>
    </div>
  );
}
import PropTypes from "prop-types";
import { useState } from "react";

function ButtonVote({ name }) {
  //let votes = 0;
  let [votes, setVote] = useState(0);

  function onClick() {
    setVote(votes + 1);
    //votes += 1;
    console.log(`Voted for ${name} votes=${votes}`);
  }
  console.log("render buttonVote", name, votes);
  return (
    <div>
      <button className="btn btn-primary mb-2" onClick={onClick}>
        vote for {name}
      </button>
      <output>
        {name} has {votes} votes
      </output>
    </div>
  );
}
ButtonVote.propTypes = {
  name: PropTypes.string.isRequired,
};

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
  const phot = [
    { url: "test", caption: "cap1" },
    { url: "test", caption: "cap2" },
  ];
  return (
    <div>
      <AppNavBar />
      <h1>Photo Sharing</h1>
      <PhotosGallery photos={phot} />
      <ButtonVote name="ali" />
      <ButtonVote name="john" />
      <AppFooter />
    </div>
  );
}
