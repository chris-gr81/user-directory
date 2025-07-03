import type { UserData } from "../../types/types";
import "./card.scss";
import default_pic from "../../assets/images/default_pic.png";

type CardProps = {
  value: UserData;
};

function Card({ value }: CardProps) {
  return (
    <div className="card" id="card__id">
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
            <div className="card__birth-date">X {value.birthDate}</div>
            <div className="card__gender" title={value.gender}>
              X {value.gender}
            </div>
            <div className="card__email" title={value.eMail}>
              X {value.eMail}
            </div>
          </div>
          <div className="card__row">
            <div className="card__adress" title={value.adress}>
              X {value.adress}
            </div>
            <div className="card__phone" title={value.phone}>
              X {value.phone}
            </div>
            <div className="card__url" title={value.url}>
              X {value.url}
            </div>
          </div>
        </div>
      </div>
      <div className="card__right-bar">Del</div>
    </div>
  );
}

export default Card;
