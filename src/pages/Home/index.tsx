import React from "react"
import { RouteComponentProps } from "@reach/router"

import css from "./style.module.scss"

import AtomTabs from "$components/AtomTabs"

export default class extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div className={css.container}>
        <main className={css.codeWrapper}></main>
        <footer className={css.tabsWrapper}>
          <AtomTabs />
        </footer>
      </div>
    )
  }
}
