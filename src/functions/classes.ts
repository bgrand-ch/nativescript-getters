import { getChildViews } from '../helpers/get-child-views'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/types'

export function getViewsByClasses (...classNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (names: string[]) {
    const view: View = this
    const className = view?.className || ''

    return names.some(name => className.includes(name))
  }

  return getChildViews.call(parentView, classNames, isChecked)
}
