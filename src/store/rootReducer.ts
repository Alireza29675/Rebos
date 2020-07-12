import { combineReducers } from "redux"

import atomReducer from "./atom/reducer"

export default combineReducers({
  atom: atomReducer,
})
