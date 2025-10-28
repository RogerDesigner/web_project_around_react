// src/components/main/Main.jsx
import React, { useState } from "react";
import avatar from "../../images/JacquesCusteau.jpg";
import Popup from "./popup/Popup"; // ruta relativa dentro de la carpeta main
import NewCard from "./form/newcard/NewCard";
import EditProfile from "./form/editprofile/EditProfile";
import EditAvatar from "./form/editavatar/EditAvatar";

// Si ya tienes los formularios como componentes, impórtalos:
// import NewCard from "./form/newcard/NewCard";
// import EditProfile from "./form/editprofile/EditProfile";
// import EditAvatar from "./form/editavatar/EditAvatar";

export default function Main() {
  const [popup, setPopup] = useState(null);

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
        <ul className="cards__list">{/* aquí luego mapearemos <Card /> */}</ul>
      </section>
      {/* === FIN DEL MARCADO TRANSFERIDO (SIN POPUPS) === */}

      {/* renderizado condicional del popup */}
      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
