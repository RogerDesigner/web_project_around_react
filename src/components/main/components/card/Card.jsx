import React from "react";

export default function Card({
  card,
  onImageClick,
  onDeleteClick,
  onLikeClick,
}) {
  const { name, link, isLiked } = card;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onImageClick(card)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={onDeleteClick}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={`card__like-button ${isLiked ? "active" : ""}`}
          onClick={onLikeClick}
        />
      </div>
    </li>
  );
}
