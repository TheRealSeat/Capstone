import React from "react";
const Modal = ({ children }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalContent">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
