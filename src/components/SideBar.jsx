import React from "react";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>Earth From Moon</h2>
        <div>
          <p>Description</p>
          <p>
            From Earth, the Moon appears to move about one outstretched fist to
            the east each night.
          </p>
        </div>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
