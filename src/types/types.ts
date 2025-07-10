export interface UserData {
  id?: string;
  userName: string;
  birthDate?: string;
  gender?: string;
  eMail: string;
  adress?: string;
  phone?: string;
  url?: string;
}

export interface FormAction {
  type: keyof UserData;
  value: string;
}

export type ProfileAction =
  | { type: "ADD_PROFILE"; payload: UserData }
  | { type: "DELETE_PROFILE"; payload: string }
  | { type: "UPDATE_PROFILE"; payload: UserData };
