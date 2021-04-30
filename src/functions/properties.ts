import { getChildViews } from '../helpers/get-child-views'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/types'

export function getViewsByProperties (...propNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (names: string[]) {
    const view: View = this

    return names.some(name => view?.[name])
  }

  return getChildViews.call(parentView, propNames, isChecked)
}
