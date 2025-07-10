import type { ProfileAction, UserData } from "../types/types";

export function profilesReducer(state: UserData[], action: ProfileAction) {
  switch (action.type) {
    case "ADD_PROFILE": {
      // TODO: Validators and Security
      // add id to new profile
      const nextId =
        state.length > 0
          ? Math.max(...state.map((profile) => Number(profile.id))) + 1
          : 1;
      const modifiedProfile = { ...action.payload, id: String(nextId) };
      return [...state, modifiedProfile];
    }
    case "DELETE_PROFILE": {
      // delete id with given id
      const modifiedProfiles = state.filter(({ id }) => id !== action.payload);
      return modifiedProfiles;
    }
    case "UPDATE_PROFILE": {
      // update a changed profile by id
      const currentId = action.payload.id;
      const modifiedProfiles = state.map((profile) => {
        if (profile.id === currentId) {
          return action.payload;
        } else {
          return profile;
        }
      });

      return modifiedProfiles;
    }
    default:
      return state;
  }
}
