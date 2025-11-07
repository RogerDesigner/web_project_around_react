import React from "react";

export default function ImagePopup({ card, onClose }) {
  if (!card) return null;

  return (
    <div className="popup popup_type_image popup_opened">
      <div className="popup__image-container">
        <button
          className="popup__close"
          type="button"
          aria-label="Cerrar imagen"
          onClick={onClose}
        />
        <img className="popup__image" src={card.link} alt={card.name} />
        <h3 className="popup__caption">{card.name}</h3>
      </div>
    </div>
  );
}
