import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"
import { Provider } from "react-redux"
import store from "$store/index"

import "./stylesheets/main.scss"

import Home from "./pages/Home"

import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Home path="/" default />
    </Router>
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()
