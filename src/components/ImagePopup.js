import React from "react";

export default function ImagePopup({ onClose, card }) {
  return (
    <div
      id="image-popup"
      className={`popup popup_view_img ${card ? "popup_active" : ""}`}
    >
      <div className="popup__preview">
        <button
          className="popup__close"
          id="previewClose"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img className="popup__image" src={card?.link} alt={card?.name} />
        <p className="popup__subtitle">{card?.name}</p>
      </div>
    </div>
  );
}
