import { getChildViews } from '../helpers/get-child-views'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/is-checked'

export function getViewsByTags (...tagNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (tagNames: string[]) {
    const view: View = this
    const typeName = view?.typeName || ''

    return tagNames.includes(typeName)
  }

  return getChildViews.call(parentView, tagNames, isChecked)
}
