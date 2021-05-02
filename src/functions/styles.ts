import { getChildViews } from '../helpers/get-child-views'
import type { View } from '@nativescript/core'
import type { ValPair, IsChecked } from '../models'

export function getViewsByStyles (...styles: ValPair[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (styles: ValPair[]) {
    const view: View = this
    const style = view?.style || {}

    return styles.some(({ name, value }) => {
      const currValue = style?.[name] || ''
      const lowerValue = value?.toLowerCase()

      return currValue.includes(lowerValue || value)
    })
  }

  return getChildViews.call(parentView, styles, isChecked)
}
