export type UserData = {
  id?: string;
  userName: string;
  birthDate?: string;
  gender?: string;
  eMail: string;
  adress?: string;
  phone?: string;
  url?: string;
};

export type FormAction = { type: keyof UserData; value: string };

export type ProfileAction =
  | { type: "ADD_PROFILE"; payload: UserData }
  | { type: "DELETE_PROFILE"; payload: string };
