import { createContext, useState, type ReactNode } from "react";
import { LOCAL_STORAGE_KEY } from "../constants";
import type { UserData } from "../types/types";

type StorageContextType = {
  addProfile: (profile: UserData) => void;
};

export const StorageContext = createContext<StorageContextType>({
  addProfile: () => {},
});

export function StorageProvider({ children }: { children: ReactNode }) {
  // state for localstorage
  const [profiles, setProfiles] = useState(() => {
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

  // add new profile and update local storage
  const addProfile = (profile: UserData) => {
    // TODO: Validators and Security
    const nextId =
      profiles.length > 0
        ? Math.max(...profiles.map((profile) => Number(profile.id))) + 1
        : 1;
    const modifiedProfile = { ...profile, id: String(nextId) };
    const updatedProfiles = [...profiles, modifiedProfile];

    setProfiles(updatedProfiles);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedProfiles));
  };

  return (
    <StorageContext.Provider value={{ addProfile }}>
      {children}
    </StorageContext.Provider>
  );
}

export default StorageProvider;
