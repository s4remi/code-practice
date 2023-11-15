import { PropTypes } from "prop-types";

export function PhotosGallery({ photos }) {
  console.log("Render PhotoGallery photos=", photos);

  function renderPhotos() {
    function renderPhoto(photo) {
      return (
        <div>
          <div>{photo.url}</div>
          <div>{photo._id}</div>
          <div>{photo._caption}</div>
          <div>{photo._owner}</div>
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
