import React from "react";

export default function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  buttonText,
  onClose,
  onSubmit,
}) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_active" : ""}`}>
      <div className="popup__block">
        <h2 className="popup__heading">{title}</h2>
        <button
          className="popup__close"
          id="updateAvatar"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>

        <form
          className="form form-update"
          onSubmit={onSubmit}
          noValidate
          name={name}
        >
          {children}
          <button className="form__save-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
