import type { View } from '@nativescript/core'
import type { ValPair, IsChecked } from '../models'

/**
 * Retrieve child views that meet criteria
 * @internal
 * @see https://v7.docs.nativescript.org/api-reference/classes/view.html
 * @see https://dev.to/hebashakeel/difference-between-call-apply-and-bind-4p98
 * @param {string[]|ValPair[]} values
 * @param {IsChecked} isChecked
 * @returns {View[]} Found views
 */
export function getChildViews (values: string[] | ValPair[], isChecked: IsChecked): View[] {
  const parentView: View = this
  const foundViews: View[] = []

  parentView.eachChildView(view => {
    const typeName = view?.typeName?.toLowerCase() || ''
    const isLayout = typeName.includes('layout')
    const isScrollView = typeName.includes('scroll')

    if (isChecked.call(view, values)) {
      foundViews.push(view)
    }

    if (isLayout || isScrollView) {
      const innerFoundViews: View[] = getChildViews.call(view, values, isChecked)

      foundViews.push(...innerFoundViews)
    }

    return true
  })

  return foundViews
}
