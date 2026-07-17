function EditAvatar() {
  return (
    <form className="popup__form">
      <input
        className="popup__input popup__input_type_avatar"
        placeholder="Link da imagem"
        type="url"
      />
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}

export default EditAvatar;
