import { ViewBase } from '@nativescript/core'
import { SearchedValues } from '../models/searched-values'

export function getChildViews (
  searchedValues: SearchedValues,
  isChecked: (searchedValues: SearchedValues) => boolean
): void {
  const parentView: ViewBase = this
  const foundViews: Array<ViewBase> = []

  console.log('getChildViews() -> parentView', parentView)
}
