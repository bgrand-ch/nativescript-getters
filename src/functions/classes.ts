import { View } from '@nativescript/core'
import { getChildViews } from '../helpers/get-child-views'

export function getViewsByClasses (...classNames: string[]): View[] {
  const parentView: View = this
  const foundViews = getChildViews.call(parentView, classNames)

  console.log('#### GET VIEWS BY CLASSES ####', classNames)

  return foundViews
}
