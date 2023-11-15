//approach 2:
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

export function PhotosGallery() {
  const [photos, setPhotos] = useState([]);
  //for tesi
  async function fetchPhotos() {
    console.log("Fetching  photos");
    const response = await fetch("api/photos");
    if (!response.ok) {
      //TODO handle error
      console.log("Error fetching photos", response);
      return;
    }
    const _photos = await response.json();
    console.log("Got data!", _photos);
    setPhotos(_photos.photos);
  }
  console.log("Render PhotoGallery photos=", photos);

  const effectFN = () => {
    fetchPhotos();
    return () => {
      //do cleanup for different situation
      //if we create a timer as an effect or disabling the connection or listening to streaming api
      //and tell them we are not listening any more
    };
  };
  const effectDependecies = [];
  useEffect(effectFN, effectDependecies);
  //fetchPhotos();

  function renderPhotos() {
    function renderPhoto(photo) {
      return (
        <div className="col-4" key={photo._id}>
          <img src={photo.url} alt={photo._caption} />
          <div>{photo._id}</div>
          <div>{photo.caption}</div>
          <div>{photo.owner}</div>
          <div>{photo.timestamp}</div>
        </div>
      );
    }
    return photos.map(renderPhoto);
  }
  return <div className="row">{renderPhotos()}</div>;
}

PhotosGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
    })
  ),
};

/*
approach 1:
export function PhotosGallery({ photos }) {
  console.log("Render photoGallery photos=", photos);
  function renderPhoto(d, i) {
    // i is index in here, using it as key for map
    return (
      <div key={`phot_${i}`}>
        <img src={d.url} alt={d.caption} />
        <div>{d.caption}</div>
        <div>{d.owner}</div>
        <div>{d.timestamp}</div>
      </div>
    );
  }
  function renderPhotos() {
    return <div>{photos.map(renderPhoto)}</div>;
  }
  console.log("Render photos Gallery photos= ", photos);
  return (
    <div className="row">
      <h2>PHOTOS</h2>
      <div>{renderPhotos()}</div>
    </div>
  );
}
PhotosGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
};
*/
