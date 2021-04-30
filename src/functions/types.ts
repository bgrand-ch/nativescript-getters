import { getChildViews } from '../helpers/get-child-views'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/is-checked'

// In addition to native types bar, picker, view, layout, list and text
const types = {
  form: [
    'Button',
    'DatePicker',
    'ListPicker',
    'Placeholder',
    'Switch',
    'TextField',
    'TextView',
    'TimePicker',
    'RadCalendar',
    'RadAutoCompleteTextView',
    'RadDataForm'
  ],
  field: [
    'SearchBar',
    'TextField',
    'TextView'
  ],
  tab: [
    'BottomNavigation',
    'Tabs',
    'TabView'
  ]
}

export function getViewsByTypes (...typeNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (typeNames: string[]) {
    const view: View = this
    const typeName = view?.typeName?.toLowerCase() || ''

    return (
      typeNames.some(name => types?.[name]?.includes(typeName)) ||
      typeNames.includes(typeName)
    )
  }

  return getChildViews.call(parentView, typeNames, isChecked)
}

