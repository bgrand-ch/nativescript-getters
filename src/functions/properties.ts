import { getChildViews } from '../helpers/get-child-views'
import { showError } from '../helpers/show-error'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/is-checked'

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
