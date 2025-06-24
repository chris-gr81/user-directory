import Button from "../button/Button";
import "./formular.scss";

function Formular() {
  return (
    <form className="formular-wrapper">
      <label htmlFor="user-name">Username</label>
      <input type="text" id="user-name" />
      <label htmlFor="geburts-datum">Geburtsdatum</label>
      <input type="date" id="geburts-datum" />
      <label htmlFor="gender">Geschlecht</label>
      <input list="gender-list" id="gender" />
      <datalist id="gender-list">
        <option value="männlich"></option>
        <option value="weiblich"></option>
        <option value="divers"></option>
      </datalist>
      <label htmlFor="email">E-Mail Adresse</label>
      <input type="email" id="email" />
      <label htmlFor="adress">Post Adresse</label>
      <input type="text" id="adress" />
      <label htmlFor="phone">Telefonnummer</label>
      <input type="tel" id="phone" />
      <label htmlFor="webside">Webseite</label>
      <input type="url" id="webside" />
      <Button type="submit" text="Submit" />
    </form>
  );
}

export default Formular;
