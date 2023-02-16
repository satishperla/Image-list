import React from "react";
const ImageList = (props) => {
  const image = props.image.map((image) => {
    return (
      <div>
        <img key={image.id} src={image.webformatURL} alt="result" />
      </div>
    );
  });
  return <div>{image}</div>;
};
export default ImageList;
