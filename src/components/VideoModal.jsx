import React from "react";
import "../index.css";
import { portfolios, video } from "../data";
import { FullscreenExitOutlined } from "@ant-design/icons";

const VideoModal = ({ setOpenVideoModal, activeVideo }) => {
  const href = portfolios[activeVideo - 1].href;
  return (
    <div className="modal">
      <div className="buttonX">
        <button onClick={() => setOpenVideoModal(false)}>
          <FullscreenExitOutlined className="icon" />
        </button>
      </div>

      {activeVideo !== null && (
        <div key={video[activeVideo - 1].id} className="modal-content">
          <h1 className="title">{video[activeVideo - 1].title}</h1>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="w-2/3 px-6 py-3 pb-3 m-4 duration-200 hover:scale-105 text-center text-lg"
          >
            Have a look 😄
          </a>
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
