import { TReduxSelector } from "$store/index"

export const selectAtoms: TReduxSelector<IAtom[]> = () => (state) => {
  return state.atom.atoms
}

export const selectCurrentAtomId: TReduxSelector<string> = () => (state) => {
  return state.atom.currId
}

export const selectCurrentAtom: TReduxSelector<IAtom | null> = () => (
  state
) => {
  const id = state.atom.currId
  for (let atom of state.atom.atoms) {
    if (atom.id === id) return atom
  }
  return null
}
