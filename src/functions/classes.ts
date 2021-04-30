import { getChildViews } from '../helpers/get-child-views'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/is-checked'

export function getViewsByClasses (...classNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (classNames: string[]) {
    const view: View = this
    const className = view?.className || ''

    return classNames.some(name => className.includes(name))
  }

  return getChildViews.call(parentView, classNames, isChecked)
}
