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
    default:
      return state;
  }
}
