import React from "react"
import classnames from "classnames"

import css from "./style.module.scss"
import { useReduxSelector } from "$store/index"
import { selectAtoms, selectCurrentAtomId } from "$store/atom/selectors"

export default () => {
  const currentAtomId = useReduxSelector(selectCurrentAtomId())
  const atoms = useReduxSelector(selectAtoms())

  return (
    <div className={css.container}>
      <ul>
        {atoms.map((atom) => {
          const isActive = currentAtomId === atom.id
          return (
            <li className={classnames(isActive && css.active)}>{atom.name}</li>
          )
        })}
      </ul>
    </div>
  )
}
