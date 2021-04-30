import { View } from '@nativescript/core'

type IsChecked = (searchedValues: string[]) => boolean

/**
 * Retrieve child views
 * @see https://v7.docs.nativescript.org/api-reference/classes/view.html
 * @see https://dev.to/hebashakeel/difference-between-call-apply-and-bind-4p98
 * @param {string[]} searchedValues
 * @param {IsChecked} isChecked
 * @returns {View[]} Found views
 */
export function getChildViews (names: string[], isChecked: IsChecked): View[] {
  const parentView: View = this
  const foundViews: View[] = []

  parentView.eachChildView(view => {
    const typeName = view?.typeName?.toLowerCase() || ''
    const isLayout = typeName.includes('layout')
    const isScrollView = typeName.includes('scroll')

    console.log('#### CHILD VIEW ####', view, {
      typeName,
      isLayout,
      isScrollView
    })

    return true
  })

  console.log('#### GET CHILD VIEWS ####', parentView)

  return foundViews
}
