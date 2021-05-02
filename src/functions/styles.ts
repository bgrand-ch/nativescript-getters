import { getChildViews } from '../helpers/get-child-views'
import { showError } from '../helpers/show-error'
import type { View, Style } from '@nativescript/core'
import type { ValPair, IsChecked } from '../models'

export function getViewsByStyles (...styles: ValPair[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (styles: ValPair[]) {
    let checked = false

    try {
      const view: View = this
      const style = view.style || {} as Style

      checked = styles.some(({ name, value }) => {
        const currValue = style[name] as string || ''

        return currValue.includes(value)
      })
    } catch (error) {
      showError(error, 'getViewsByStyles')
    }

    return checked
  }

  return getChildViews.call(parentView, styles, isChecked)
}
