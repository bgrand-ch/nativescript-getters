import { getChildViews, showError } from '../helpers'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/is-checked'

/** @internal */
export function getViewsByProperties (...propNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (propNames: string[]) {
    let checked = false

    try {
      const view: View = this

      checked = propNames.some(name => view[name])
    } catch (error) {
      showError(error, 'getViewsByProperties')
    }

    return checked
  }

  return getChildViews.call(parentView, propNames, isChecked)
}
