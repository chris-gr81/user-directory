import type { UserData } from "../../types/types";
import "./card.scss";
import default_pic from "../../assets/images/default_pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faVenusMars,
  faEnvelope,
  faAddressBook,
  faPhone,
  faGlobe,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useStorage } from "../../context/StorageContext";
import { useNavigate } from "react-router-dom";

type CardProps = {
  value: UserData;
};

function Card({ value }: CardProps) {
  const { deleteProfile } = useStorage();
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget as HTMLElement;
    const cardId = card.dataset.id;
    const deleteBtn = (e.target as HTMLElement).closest(".card__icon--delete");

    if (cardId) {
      if (deleteBtn) {
        deleteProfile(cardId); // click on delete-icon (for delete card)
      } else {
        navigate(`/edit/${cardId}`); // click on any other place at the card (for edit mode)
      }
    }
  };

  return (
    <div
      className="card"
      id="card__id"
      data-id={value.id}
      onClick={handleCardClick}
    >
      <div className="card__picture">
        <img
          className="card__sample-pic"
          src={default_pic}
          alt="Default Human"
        />
      </div>
      <div className="card__profile">
        <div className="card__title">{value.userName}</div>
        <div className="card__content">
          <div className="card__row">
            <div className="card__birth-date">
              <FontAwesomeIcon icon={faCakeCandles} className="card__icon" />
              {value.birthDate}
            </div>
            <div className="card__gender" title={value.gender}>
              <FontAwesomeIcon icon={faVenusMars} className="card__icon" />
              {value.gender}
            </div>
            <div className="card__email" title={value.eMail}>
              <FontAwesomeIcon icon={faEnvelope} className="card__icon" />
              {value.eMail}
            </div>
          </div>
          <div className="card__row">
            <div className="card__adress" title={value.adress}>
              <FontAwesomeIcon icon={faAddressBook} className="card__icon" />
              {value.adress}
            </div>
            <div className="card__phone" title={value.phone}>
              <FontAwesomeIcon icon={faPhone} className="card__icon" />
              {value.phone}
            </div>
            <div className="card__url" title={value.url}>
              <FontAwesomeIcon icon={faGlobe} className="card__icon" />
              {value.url}
            </div>
          </div>
        </div>
      </div>
      <div className="card__right-bar">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="card__icon card__icon--delete"
        />
      </div>
    </div>
  );
}

export default Card;
