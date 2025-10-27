import React from "react";
import "./popup.css";

export default function Popup(props) {
  const { title, children, onClose } = props;

  return (
    <div className="popup popup_opened">
      <div className="popup__content">
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
