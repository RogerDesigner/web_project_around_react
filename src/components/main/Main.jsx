// src/components/main/Main.jsx
import React, { useState } from "react";
import avatar from "../../images/JacquesCusteau.jpg";
import Popup from "./popup/Popup"; // ruta relativa dentro de la carpeta main
import NewCard from "./form/newcard/NewCard";

// Si ya tienes los formularios como componentes, impórtalos:
// import NewCard from "./form/newcard/NewCard";
// import EditProfile from "./form/editprofile/EditProfile";
// import EditAvatar from "./form/editavatar/EditAvatar";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const handleClosePopup = () => {
    setPopup(null);
  };

  // helpers para abrir popups (pásales title y children)
  function openNewCardPopup() {
    // ejemplo si tienes el componente NewCard importado:
    // setPopup({ title: "Nuevo lugar", children: <NewCard onAdd={handleAddCard} /> });

    // temporal: ejemplo con texto hijo
    setPopup({
      title: "Nuevo lugar",
      children: <div>Formulario NewCard aquí</div>,
    });
  }

  function openEditProfilePopup() {
    setPopup({
      title: "Editar perfil",
      children: <div>Formulario EditProfile aquí</div>,
    });
  }

  function openEditAvatarPopup() {
    setPopup({
      title: "Actualizar avatar",
      children: <div>Formulario EditAvatar aquí</div>,
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
