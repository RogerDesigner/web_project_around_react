import React from "react";

export default function EditProfile() {
  return (
    <form
      className="popup__form"
      name="profile-form"
      id="profile-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          id="profile-name"
          name="name"
          minLength="2"
          maxLength="40"
          placeholder="Nombre"
          required
          type="text"
        />
        <span className="popup__error" id="profile-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          id="profile-description"
          name="about"
          minLength="2"
          maxLength="200"
          placeholder="Acerca de mí"
          required
          type="text"
        />
        <span className="popup__error" id="profile-description-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
