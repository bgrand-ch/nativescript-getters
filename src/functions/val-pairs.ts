import { getChildViews } from '../helpers/get-child-views'
import { showError } from '../helpers/show-error'
import type { View } from '@nativescript/core'
import type { ValPair, IsChecked } from '../models'

export function getViewsByValPairs (...valPairs: ValPair[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (valPairs: ValPair[]) {
    let checked = false

    try {
      const view: View = this

      checked = valPairs.some(({ name, value }) => {
        const currValue = view[name] as string || ''

        return currValue.includes(value)
      })
    } catch (error) {
      showError(error, 'getViewsByValPairs')
    }

    return checked
  }

  return getChildViews.call(parentView, valPairs, isChecked)
}
