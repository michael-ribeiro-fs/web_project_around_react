function NewCard() {
  return (
    <form className="popup__form">
      <input
        className="popup__input popup__input_type_card-name"
        placeholder="Título"
        type="text"
      />
      <input
        className="popup__input popup__input_type_url"
        placeholder="Link da imagem"
        type="url"
      />
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}

export default NewCard;
