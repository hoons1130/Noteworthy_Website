import React, { useState } from "react";
import "./Button.css";
import { ImNext2 } from "react-icons/im";
import { ImPrevious2 } from "react-icons/im";

function VideoSlider({ videos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : videos.length - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex < videos.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="slideBar2">
        <button style={{ backgroundColor: "transparent", border: "none" }}>
          <ImPrevious2
            style={{
              fontSize: "100px",
              color: "White",
              backgroundColor: "transparent",
            }}
            onClick={goToPrevious}
          />
        </button>
      </div>
      <div className="slideBar1">
        <button style={{ backgroundColor: "transparent", border: "none" }}>
          <ImNext2
            style={{ fontSize: "100px", color: "White" }}
            onClick={goToNext}
          />
        </button>
      </div>
      <div className="video-responsive">
        <iframe
          src={`https://www.youtube.com/embed/${videos[currentIndex]}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
}

export default VideoSlider;
