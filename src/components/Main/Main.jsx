import { useState } from "react";
import avatar from "../../images/avatar.jpg";
import editIcon from "../../images/edit-icon.svg";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import NewCard from "../NewCard/NewCard";
import ImagePopup from "../ImagePopup/ImagePopup";
import Card from "../Card/Card";
import Popup from "../Popup/Popup";

const mockCards = [
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
];

const userMock = {
  name: "Jacques Cousteau",
  about: "Explorador dos mares",
  avatar: avatar,
  _id: "5d1f0611d321eb4bdcd707dd",
};

function Main() {
  const [popup, setPopup] = useState(null);

  const handleOpenPopup = (popupConfig) => {
    setPopup(popupConfig);
  };

  const closeAllPopups = () => {
    setPopup(null);
  };

  const handleEditProfile = () => {
    handleOpenPopup({
      title: "Editar perfil",
      children: <EditProfile />,
    });
  };

  const handleEditAvatar = () => {
    handleOpenPopup({
      title: "Alterar foto de perfil",
      children: <EditAvatar />,
    });
  };

  const handleAddCard = () => {
    handleOpenPopup({
      title: "Novo local",
      children: <NewCard />,
    });
  };

  const handleCardClick = (card) => {
    handleOpenPopup({
      title: null,
      children: <ImagePopup card={card} />,
    });
  };

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar-container" onClick={handleEditAvatar}>
          <img
            className="profile__image"
            src={userMock.avatar || avatar}
            alt="Avatar"
          />
          <div className="profile__avatar-edit-overlay">
            <img
              src={editIcon}
              alt="Editar avatar"
              className="profile__avatar-edit-icon"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userMock.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={handleEditProfile}
          />
          <p className="profile__description">{userMock.about}</p>
        </div>
        <button
          aria-label="Adicionar cartão"
          className="profile__add-button"
          type="button"
          onClick={handleAddCard}
        />
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {mockCards.map((card) => (
            <Card key={card._id} card={card} onCardClick={handleCardClick} />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={closeAllPopups} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
