import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const link = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: link.current.value,
    });
  }

  return (
    <PopupWithForm
      title={"Обновить аватар"}
      name={"update-avatar"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={"Сохранить"}
    >
      <input
        className="form__input"
        type="url"
        name="link"
        id="link"
        placeholder="Ссылка на картинку"
        ref={link}
        onChange={(evt) => (link.current.value = evt.target.value)}
        required
      />
      <span
        className="link-error form__input-error"
        id="updateAvatar-error"
      ></span>
    </PopupWithForm>
  );
}
