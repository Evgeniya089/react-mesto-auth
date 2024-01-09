import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      title={"Новое место"}
      name={"add"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={"Создать"}
    >
      <input
        className="form__input"
        type="text"
        name="name"
        id="cardName"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
        required
      />
      <span
        className="cardName-error form__input-error"
        id="cardName-error"
      ></span>

      <input
        className="form__input"
        type="url"
        name="link"
        id="url"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={(evt) => setLink(evt.target.value)}
      />
      <span className="url-error form__input-error" id="cardUrl-error"></span>
    </PopupWithForm>
  );
}
