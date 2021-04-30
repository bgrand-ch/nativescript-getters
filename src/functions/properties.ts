import { getChildViews } from '../helpers/get-child-views'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/is-checked'

export function getViewsByProperties (...propNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (propNames: string[]) {
    const view: View = this

    return propNames.some(name => view?.[name])
  }

  return getChildViews.call(parentView, propNames, isChecked)
}
