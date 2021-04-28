import { View } from '@nativescript/core/ui'
import { Getters } from './models/getters'
import { getViewsByClasses } from './functions'

declare module '@nativescript/core' {
  interface View extends Getters {}
}

View.prototype.getViewsByClasses = getViewsByClasses
