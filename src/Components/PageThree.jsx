import "./PageThree.css";
import VideoSlider from "./Button";

function PageThree() {
  const videos = [
    "QHqUXFsKwZQ",
    "cDjY-1WuB3o",
    "oNoCPGvcCdI",
    "7cUgZIO7iKY",
    "7zQGp12hsMU",
    "ZCLVgKUWtyI",
  ];

  return (
    <div className="pageThree">
      <div className="head">
        <h1>Our Favorite Videos </h1>
      </div>
      <div className="button">
        <VideoSlider videos={videos} />
      </div>
      <div className="bottom">
        <h4>Find Us on YouTube</h4>
      </div>
    </div>
  );
}

export default PageThree;
