import { NOOP } from "./noopTypes"

export const doNoop = () => {
  return {
    type: NOOP,
    payload: {},
  }
}
