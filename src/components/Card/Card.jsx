function Card({ card, onCardClick }) {
  const { name, link } = card;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />
      <button
        aria-label="Excluir cartão"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Curtir"
          type="button"
          className="card__like-button"
        />
      </div>
    </li>
  );
}

export default Card;
