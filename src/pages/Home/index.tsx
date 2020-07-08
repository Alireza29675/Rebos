import React from "react"
import { RouteComponentProps } from "@reach/router"

import css from "./style.module.scss"

export default class extends React.Component<RouteComponentProps> {
  state = {
    i: 0,
  }
  componentDidMount() {
    setInterval(this.nextSlug.bind(this), 100)
    this.nextSlug()
  }
  nextSlug() {
    this.setState({
      i: (this.state.i + 1) % 3,
    })
  }

  render() {
    const { i } = this.state

    return (
      <div className={css.container}>
        <h1>
          <span style={{ opacity: i === 0 ? 1 : 0 }}>REACT </span>
          <span style={{ opacity: i === 1 ? 1 : 0 }}>IS</span>
          <span style={{ opacity: i === 2 ? 1 : 0 }}>READY</span>
        </h1>
      </div>
    )
  }
}
