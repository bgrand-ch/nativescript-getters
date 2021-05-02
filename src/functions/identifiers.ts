import { getChildViews } from '../helpers/get-child-views'
import { showError } from '../helpers/show-error'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/is-checked'

export function getViewsByIdentifiers (...idNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (idNames: string[]) {
    let checked = false

    try {
      const view: View = this
      const id = view.id || ''

      checked = idNames.includes(id)
    } catch (error) {
      showError(error, 'getViewsByIdentifiers')
    }

    return checked
  }

  return getChildViews.call(parentView, idNames, isChecked)
}
