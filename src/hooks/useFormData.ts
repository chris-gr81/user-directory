import { useReducer, useState } from "react";
import type { UserData } from "../types/types";
import { formReducer } from "../reducers/formReducer";

function useFormData() {
  const defaultUserData: UserData = {
    id: "", // TODO
    userName: "",
    birthDate: "",
    gender: "",
    eMail: "",
    adress: "",
    phone: "",
    url: "",
  };
  const [formData, dispatchFormData] = useReducer(formReducer, defaultUserData);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    dispatchFormData({
      type: name as keyof UserData,
      value,
    });
  };

  return { formData, handleChange };
}

export default useFormData;
