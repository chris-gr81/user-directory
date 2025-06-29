import Button from "../button/Button";
import "./formular.scss";
import useFormData from "../../hooks/useFormData";
import { useContext } from "react";
import { StorageContext } from "../../context/StorageContext";

function Formular() {
  const { handleChange, formData } = useFormData();
  const { addProfile } = useContext(StorageContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // avoid reload
    addProfile(formData);
  };
  return (
    <form
      className="formular-wrapper"
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <label htmlFor="user-name">Username</label>
      <input type="text" id="user-name" name="userName" />
      <label htmlFor="geburts-datum">Geburtsdatum</label>
      <input type="date" id="geburts-datum" name="birthDate" />
      <label htmlFor="gender">Geschlecht</label>
      <input list="gender-list" id="gender" name="gender" />
      <datalist id="gender-list">
        <option value="männlich"></option>
        <option value="weiblich"></option>
        <option value="divers"></option>
      </datalist>
      <label htmlFor="email">E-Mail Adresse</label>
      <input type="email" id="email" name="eMail" />
      <label htmlFor="adress">Post Adresse</label>
      <input type="text" id="adress" name="adress" />
      <label htmlFor="phone">Telefonnummer</label>
      <input type="tel" id="phone" name="phone" />
      <label htmlFor="webside">Webseite</label>
      <input type="url" id="webside" name="url" />
      <Button type="submit" text="Submit" />
    </form>
  );
}

export default Formular;
