export default function RemoveCard({ onConfirm }) {
  return (
    <form className="popup__form" name="remove-card-form">
      <p className="popup__confirmation-text">
        ¿Estás seguro de que deseas eliminar esta tarjeta?
      </p>
      <button
        className="button popup__button"
        type="button"
        onClick={onConfirm}
      >
        Sí
      </button>
    </form>
  );
}
