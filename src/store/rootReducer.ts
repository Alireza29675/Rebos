import { combineReducers } from "redux"

import noopReducer from "./noop/noopReducer"

export default combineReducers({
  noop: noopReducer,
})
