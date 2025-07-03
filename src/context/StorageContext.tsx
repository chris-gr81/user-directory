import {
  createContext,
  useEffect,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import { LOCAL_STORAGE_KEY } from "../constants";
import type { UserData } from "../types/types";
import { profilesReducer } from "../reducers/profilesReducer";

type StorageContextType = {
  addProfile: (profile: UserData) => void;
  profiles: UserData[];
};

export const StorageContext = createContext<StorageContextType>({
  addProfile: () => {},
  profiles: [],
});

export function StorageProvider({ children }: { children: ReactNode }) {
  // state for localstorage
  const [profiles, dispatch] = useReducer(profilesReducer, [], () => {
    const inStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (inStorage) {
      try {
        return JSON.parse(inStorage) as UserData[];
      } catch (error) {
        console.error("Error while parsing profiles");
      }
    }
    return [];
  });

  // save in storage, if profiles-array changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(profiles));
  }, [profiles]);

  // add new profile and update local storage
  const addProfile = (profile: UserData) => {
    dispatch({ type: "ADD_PROFILE", payload: profile });
  };

  return (
    <StorageContext.Provider value={{ addProfile, profiles }}>
      {children}
    </StorageContext.Provider>
  );
}

export default StorageProvider;
