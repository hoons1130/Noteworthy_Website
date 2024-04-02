import React, { useState } from "react";
import Modal from "react-modal";
import "./Modal.css";
const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ImageModal({ imageUrl, text1, text2, text3, text4, bio }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <img
        src={imageUrl}
        alt="Thumbnail"
        onClick={() => setModalOpen(true)}
        style={{ cursor: "pointer", maxWidth: "100%", maxHeight: "100%" }}
      />
      <div className="name">
        <h2>{text1.slice(5)}</h2>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customModalStyles}
        contentLabel="Image Modal"
      >
        <div className="container">
          <section>
            <article className="one">
              <img src={imageUrl} />
            </article>
            <article>
              <h1 className="aa">{text1}</h1>
              <h4>{text2}</h4>
              <h4>{text3}</h4>
              <h4>{text4}</h4>
              <p>{bio}</p>
            </article>
          </section>
        </div>
        <button onClick={() => setModalOpen(false)}>Close</button>
      </Modal>
    </>
  );
}

export default ImageModal;
