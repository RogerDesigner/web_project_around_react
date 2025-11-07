// src/components/main/Main.jsx
import React, { useState } from "react";
import avatar from "../../images/JacquesCusteau.jpg";
import Popup from "./popup/Popup"; // ruta relativa dentro de la carpeta main
import NewCard from "./form/newcard/NewCard";
import EditProfile from "./form/editprofile/EditProfile";
import EditAvatar from "./form/editavatar/EditAvatar";
import Card from "./components/Card/Card";
import ImagePopup from "./components/imagepopup/ImagePopup";
import RemoveCard from "./form/removecard/RemoveCard";

// Si ya tienes los formularios como componentes, impórtalos:
// import NewCard from "./form/newcard/NewCard";
// import EditProfile from "./form/editprofile/EditProfile";
// import EditAvatar from "./form/editavatar/EditAvatar";

export default function Main() {
  const [cards, setCards] = useState([
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ]);

  console.log(cards);
  const [popup, setPopup] = useState(null);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleClosePopup = () => {
    setPopup(null);
  };

  function openNewCardPopup() {
    setPopup({
      title: "Nuevo lugar",
      children: <NewCard />,
    });
  }

  function openEditProfilePopup() {
    setPopup({
      title: "Editar perfil",
      children: <EditProfile />,
    });
  }

  function openEditAvatarPopup() {
    setPopup({
      title: "Actualizar avatar",
      children: <EditAvatar />,
    });
  }

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const removeCardPopup = {
    title: "Eliminar tarjeta",
    children: <RemoveCard onConfirm={handleConfirmDelete} />,
  };

  const [cardToDelete, setCardToDelete] = useState(null);

  function handleConfirmDelete() {
    console.log("Eliminando tarjeta:", cardToDelete);
    setPopup(null); // Cierra el popup
  }

  function handleCardLike(cardId) {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card._id === cardId ? { ...card, isLiked: !card.isLiked } : card
      )
    );
  }

  return (
    <main className="content">
      {/* === MARCADO TRANSFERIDO DEL PROYECTO ANTERIOR (SIN POPUPS) === */}
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src={avatar} alt="Foto de perfil" />
          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Editar avatar"
            onClick={openEditAvatarPopup}
          />
        </div>

        <div className="profile__info">
          <div className="profile__name-edit">
            <h1 className="profile__name">Jacques Cousteau</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Editar perfil"
              onClick={openEditProfilePopup}
            />
          </div>
          <p className="profile__description">Explorador</p>
        </div>

        <button
          className="profile__add-button"
          type="button"
          aria-label="Añadir tarjeta"
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>

      <section className="elements">
        <h2 className="elements__title" hidden>
          Galería de tarjetas
        </h2>

        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onImageClick={handleCardClick}
              onDeleteClick={() => {
                setCardToDelete(card);
                handleOpenPopup(removeCardPopup);
              }}
              onLikeClick={() => handleCardLike(card._id)} // <-- NUEVO
            />
          ))}
        </ul>
      </section>
      {/* === FIN DEL MARCADO TRANSFERIDO (SIN POPUPS) === */}

      {/* renderizado condicional del popup */}
      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
        </Popup>
      )}

      {selectedCard && (
        <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </main>
  );
}
