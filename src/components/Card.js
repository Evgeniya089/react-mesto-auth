import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((i) => i === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="element">
      <img
        className="element__image"
        src={card.link}
        onClick={handleClick}
        alt={card.name}
      />
      {isOwn && (
        <button
          className="element__delete-button"
          type="button"
          onClick={() => onCardDelete(card)}
        ></button>
      )}
      <div className="element__info">
        <h2 className="element__text">{card.name}</h2>
        <div>
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Нравиться"
            onClick={() => onCardLike(card)}
          ></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
