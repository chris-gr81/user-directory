import { useState } from "react";
import type { UserData } from "../types/types";
import { useStorage } from "../context/StorageContext";

function useFormData(initialData: UserData) {
  const [formData, setFormData] = useState<UserData>(initialData);
  const { addProfile, updateProfile } = useStorage();
  const isEdit = Boolean(initialData.id);

  const isBtnValid =
    formData.userName !== "" &&
    formData.birthDate !== "" &&
    formData.gender !== "" &&
    formData.eMail !== "" &&
    formData.adress !== "" &&
    formData.phone !== "" &&
    formData.url !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name as keyof UserData]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // avoid reload

    isEdit ? updateProfile(formData) : addProfile(formData);
  };

  return { formData, handleChange, handleSubmit, isEdit, isBtnValid };
}

export default useFormData;
