import type { FormAction, UserData } from "../types/types";

export function formReducer(state: UserData, action: FormAction) {
  switch (action.type) {
    case "id":
      return state;
    case "userName":
      return { ...state, userName: action.value };
    case "birthDate":
      return { ...state, birthDate: action.value };
    case "gender":
      return { ...state, gender: action.value };
    case "eMail":
      return { ...state, eMail: action.value };
    case "adress":
      return { ...state, adress: action.value };
    case "phone":
      return { ...state, phone: action.value };
    case "url":
      return { ...state, url: action.value };
    default:
      return state;
  }
}
