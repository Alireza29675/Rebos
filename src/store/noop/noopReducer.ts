import { Reducer } from "redux"

import { NOOP } from "./noopTypes"

const initalState = {}

const reducer: Reducer = (state = initalState, action) => {
  switch (action.type) {
    case NOOP: {
      return { ...state }
    }
    default: {
      return state
    }
  }
}

export default reducer
