import { NOOP } from "./types"

export const doNoop = () => {
  return {
    type: NOOP,
    payload: {},
  }
}
