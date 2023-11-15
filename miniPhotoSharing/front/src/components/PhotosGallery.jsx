import { PropTypes } from "prop-types";
import { useState } from "react";

export function PhotosGallery({ photos }) {
  let [photos, setPhotos] = useState([]);
  console.log("Render PhotoGallery photos=", photos);

  function renderPhotos() {
    function renderPhoto(photo) {
      return (
        <div className="col-4">
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
