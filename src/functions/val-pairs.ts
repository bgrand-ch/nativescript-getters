import { getChildViews } from '../helpers/get-child-views'
import type { View } from '@nativescript/core'
import type { ValPair, IsChecked } from '../models'

export function getViewsByValPairs (...valPairs: ValPair[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (valPairs: ValPair[]) {
    const view: View = this

    return valPairs.some(({ name, value }) => {
      const currValue = view?.[name] || ''

      return currValue.includes(value)
    })
  }

  return getChildViews.call(parentView, valPairs, isChecked)
}
