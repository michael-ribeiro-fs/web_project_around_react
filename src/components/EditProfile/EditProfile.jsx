function EditProfile() {
  return (
    <form className="popup__form">
      <input
        className="popup__input popup__input_type_name"
        placeholder="Nome"
        type="text"
      />
      <input
        className="popup__input popup__input_type_description"
        placeholder="Sobre mim"
        type="text"
      />
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}

export default EditProfile;
