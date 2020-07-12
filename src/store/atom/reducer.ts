import { Reducer } from "redux"

import { ATOM_ADDED } from "./types"

interface IState {
  currId: string
  atoms: IAtom[]
}

const initalState: IState = {
  currId: "uuid2",
  atoms: [
    {
      id: "uuid1",
      name: "Atom 1",
    },
    {
      id: "uuid2",
      name: "Atom 2",
    },
    {
      id: "uuid3",
      name: "Atom 3",
    },
  ],
}

const reducer: Reducer = (state = initalState, action) => {
  switch (action.type) {
    case ATOM_ADDED: {
      const { atom } = action.payload
      return {
        atoms: [...state.atoms, atom],
        ...state,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
