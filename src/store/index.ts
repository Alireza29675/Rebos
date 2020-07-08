import { createStore, applyMiddleware } from "redux"
import { useSelector, TypedUseSelectorHook } from "react-redux"
import thunk from "redux-thunk"

import rootReducer from "./rootReducer"

export type RootState = ReturnType<typeof rootReducer>
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector
export type TReduxSelector<T> = (...props: any[]) => (state: RootState) => T

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
