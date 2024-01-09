import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title={"Редактировать профиль"}
      name={"edit"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={"Сохранить"}
    >
      <input
        className="form__input form__input-name"
        type="text"
        name="name"
        id="name"
        placeholder="Ваше имя"
        minLength="2"
        value={name || ""}
        onChange={(evt) => setName(evt.target.value)}
        maxLength="40"
        required
      />
      <span
        className="name-error form__input-error"
        id="editNameInput-error"
      ></span>

      <input
        className="form__input form__input-desc"
        type="text"
        name="about"
        id="about"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        value={description || ""}
        onChange={(evt) => setDescription(evt.target.value)}
        required
      />
      <span
        className="about-error form__input-error"
        id="aboutMeInput-error"
      ></span>
    </PopupWithForm>
  );
}
