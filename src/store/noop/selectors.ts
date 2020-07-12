import { TReduxSelector } from "$store/index"

export const selectNoop: TReduxSelector<boolean> = () => (state) => {
  return true
}
