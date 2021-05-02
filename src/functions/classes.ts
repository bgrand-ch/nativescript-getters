import { getChildViews } from '../helpers/get-child-views'
import { showError } from '../helpers/show-error'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/is-checked'

export function getViewsByClasses (...classNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (classNames: string[]) {
    let checked = false

    try {
      const view: View = this
      const className = view.className || ''

      checked = classNames.some(name => className.includes(name))
    } catch (error) {
      showError(error, 'getViewsByClasses')
    }

    return checked
  }

  return getChildViews.call(parentView, classNames, isChecked)
}
