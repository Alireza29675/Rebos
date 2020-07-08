import React, { SFC } from "react"

import css from "./style.module.scss"

interface IProps {
  children: string
}

export const Center: SFC<IProps> = ({ children }) => {
  return <div className={css.center}>{children}</div>
}
