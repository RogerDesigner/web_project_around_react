import React from "react";
import avatar from "../../images/JacquesCusteau.jpg";

export default function Main() {
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
          />
        </div>

        <div className="profile__info">
          <div className="profile__name-edit">
            <h1 className="profile__name">Jacques Cousteau</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Editar perfil"
            />
          </div>
          <p className="profile__description">Explorador</p>
        </div>

        <button
          className="profile__add-button"
          type="button"
          aria-label="Añadir tarjeta"
        />
      </section>

      <section className="elements">
        <h2 className="elements__title" hidden>
          Galería de tarjetas
        </h2>
        <ul className="cards__list">{/* aquí luego mapearemos <Card /> */}</ul>
      </section>
      {/* === FIN DEL MARCADO TRANSFERIDO (SIN POPUPS) === */}
    </main>
  );
}
