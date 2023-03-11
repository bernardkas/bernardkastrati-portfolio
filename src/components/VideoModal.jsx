import React from "react";
import "../index.css";
import { video } from "../data";
import { FullscreenExitOutlined } from "@ant-design/icons";

const VideoModal = ({ setOpenVideoModal, activeVideo }) => {
  return (
    <div className="modal">
      <div className="buttonX">
        <button onClick={() => setOpenVideoModal(false)}>
          <FullscreenExitOutlined className="icon" />
        </button>
      </div>

      {activeVideo !== null && (
        <div key={video[activeVideo - 1].id} className="modal-content">
          <h1 className="">{video[activeVideo - 1].title}</h1>
          <video
            className="video"
            loop
            autoPlay
            controls
            src={video[activeVideo - 1].src}
          ></video>
        </div>
      )}
    </div>
  );
};

export default VideoModal;
