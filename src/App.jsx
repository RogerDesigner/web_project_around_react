// src/App.jsx
import React from "react";
import "./index.css"; // aquí ya metiste el CSS global (copiado de pages/index.css)
import logo from "./images/vector_Aroun_the_us.svg"; // ajusta el nombre si tu archivo difiere

export default function App() {
  return (
    <div className="page">
      <div className="page__content">
        <header className="header page__section">
          <img
            src={logo}
            alt="Around the U.S logo"
            className="header__logo-image"
          />
        </header>

        <main className="content">
          {/* === MARCADO TRANSFERIDO DEL PROYECTO ANTERIOR (SIN POPUPS) === */}
          <section className="profile">
            <div className="profile__avatar-wrapper">
              <img
                className="profile__avatar"
                src="./images/JacquesCusteau.jpg" // si existe en src/images
                alt="Foto de perfil"
              />
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
            <ul className="cards__list">
              {/* aquí luego mapearemos <Card /> */}
            </ul>
          </section>
          {/* === FIN DEL MARCADO TRANSFERIDO (SIN POPUPS) === */}
        </main>

        <footer className="footer page__section">
          <p className="footer__text">© 2025 Around The U.S.</p>
        </footer>
      </div>
    </div>
  );
}
