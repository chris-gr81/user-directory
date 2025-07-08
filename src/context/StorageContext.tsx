import {
  createContext,
  useEffect,
  useReducer,
  useContext,
  type ReactNode,
} from "react";
import { LOCAL_STORAGE_KEY } from "../constants";
import type { UserData } from "../types/types";
import { profilesReducer } from "../reducers/profilesReducer";

type StorageContextType = {
  addProfile: (profile: UserData) => void;
  deleteProfile: (id: string) => void;
  profiles: UserData[];
};

export const StorageContext = createContext<StorageContextType>({
  addProfile: () => {},
  deleteProfile: () => {},
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

  // delete profile and update local storage
  const deleteProfile = (id: string) => {
    dispatch({ type: "DELETE_PROFILE", payload: id });
  };
  return (
    <StorageContext.Provider value={{ addProfile, deleteProfile, profiles }}>
      {children}
    </StorageContext.Provider>
  );
}

export function useStorage() {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error("useStorage must be used within a StorageProvider");
  }
  return context;
}

export default StorageProvider;
