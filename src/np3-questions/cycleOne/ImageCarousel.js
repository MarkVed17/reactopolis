import { useState } from "react";

export default function App() {
  const imgSources = [
    "https://cdn.pixabay.com/photo/2012/03/09/00/03/architecture-22527_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png",
    "https://cdn.pixabay.com/photo/2017/05/13/06/54/home-2308799_1280.jpg",
    "https://cdn.pixabay.com/photo/2012/11/28/09/08/mars-67522_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/06/08/19/46/cereal-1444495_1280.jpg",
  ];

  const [imgIndex, setImgIndex] = useState(0);

  function nextClick() {
    setImgIndex(imgIndex > 3 ? 0 : imgIndex + 1);
  }

  function prevClick() {
    setImgIndex(imgIndex === 0 ? 4 : imgIndex - 1);
  }

  // Auto-slide after 1sec
  // setInterval(() => nextClick(), 1000);

  return (
    <div>
      <h1>Image Carousel</h1>
      <div className="carousel">
        <button className="carousel-button" onClick={prevClick}>Prev</button>{" "}
        <img src={imgSources[imgIndex]} alt="" className="carousel-img" />
        <button className="carousel-button" onClick={nextClick}>Next</button>
      </div>
      {imgIndex}
    </div>
  );
}
