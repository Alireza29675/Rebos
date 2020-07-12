import { ATOM_ADDED } from "./types"

export const atomAdded = (atom: IAtom) => {
  return {
    type: ATOM_ADDED,
    payload: {
      atom,
    },
  }
}
