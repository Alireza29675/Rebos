import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"

import "./stylesheets/main.scss"

import Home from "./pages/Home"

import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <Router>
    <Home path="/" default />
  </Router>,
  document.getElementById("root")
)

serviceWorker.unregister()
