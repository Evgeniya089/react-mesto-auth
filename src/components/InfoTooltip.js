import React from "react";
import succesIcon from "../images/succes.svg";
import errorIcon from "../images/error.svg";

export default function InfoTooltip({ name, isOpen, onClose, error }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_active" : ""}`}>
      <div className="popup__block">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <div className="info">
          <img className="info__image" src={error ? errorIcon : succesIcon} />
          <p className="info__text">
            {error
              ? "Что-то пошло не так! Попробуйте ещё раз."
              : "Вы успешно зарегистрировались!"}
          </p>
        </div>
      </div>
    </div>
  );
}
