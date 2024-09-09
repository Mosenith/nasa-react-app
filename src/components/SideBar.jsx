import React from "react";

export default function SideBar(props) {
  const { handleToggleModal } = props;
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>Earth From Moon</h2>
        <div>
          <h3>Description</h3>
          <p>
            From Earth, the Moon appears to move about one outstretched fist to
            the east each night.
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
