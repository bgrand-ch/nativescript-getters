import { getChildViews, showError } from '../helpers'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/is-checked'

/** @internal */
export function getViewsByTags (...tagNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (tagNames: string[]) {
    let checked = false

    try {
      const view: View = this
      const typeName = view.typeName || ''

      checked = tagNames.includes(typeName)
    } catch (error) {
      showError(error, 'getViewsByTags')
    }

    return checked
  }

  return getChildViews.call(parentView, tagNames, isChecked)
}
