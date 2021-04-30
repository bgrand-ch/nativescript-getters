import { getChildViews } from '../helpers/get-child-views'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/is-checked'

export function getViewsByIdentifiers (...idNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (idNames: string[]) {
    const view: View = this
    const id = view?.id || ''

    return idNames.includes(id)
  }

  return getChildViews.call(parentView, idNames, isChecked)
}
