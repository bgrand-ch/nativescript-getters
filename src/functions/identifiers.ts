import { getChildViews } from '../helpers/get-child-views'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/types'

export function getViewsByIdentifiers (...idNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (names: string[]) {
    const view: View = this
    const id = view?.id || ''

    return names.includes(id)
  }

  return getChildViews.call(parentView, idNames, isChecked)
}
