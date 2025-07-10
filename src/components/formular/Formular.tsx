import Button from "../button/Button";
import "./formular.scss";

import type { UserData } from "../../types/types";
import useFormData from "../../hooks/useFormData";

interface FormularProps {
  initialData: UserData;
}

function Formular({ initialData }: FormularProps) {
  const { formData, handleChange, handleSubmit, isEdit, isBtnValid } =
    useFormData(initialData);

  return (
    <form className="formular-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="user-name">Username</label>
      <input
        type="text"
        id="user-name"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
      />
      <label htmlFor="geburts-datum">Geburtsdatum</label>
      <input
        type="date"
        id="geburts-datum"
        name="birthDate"
        value={formData.birthDate}
        onChange={handleChange}
      />
      <label htmlFor="gender">Geschlecht</label>
      <input
        list="gender-list"
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      />
      <datalist id="gender-list">
        <option value="männlich"></option>
        <option value="weiblich"></option>
        <option value="divers"></option>
      </datalist>
      <label htmlFor="email">E-Mail Adresse</label>
      <input
        type="email"
        id="email"
        name="eMail"
        value={formData.eMail}
        onChange={handleChange}
      />
      <label htmlFor="adress">Post Adresse</label>
      <input
        type="text"
        id="adress"
        name="adress"
        value={formData.adress}
        onChange={handleChange}
      />
      <label htmlFor="phone">Telefonnummer</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <label htmlFor="webside">Webseite</label>
      <input
        type="url"
        id="webside"
        name="url"
        value={formData.url}
        onChange={handleChange}
      />
      <Button
        type="submit"
        text={isEdit ? "Ändern" : "Anlegen"}
        disabled={!isBtnValid}
      />
    </form>
  );
}

export default Formular;
