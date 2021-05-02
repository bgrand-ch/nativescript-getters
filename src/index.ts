import type { Getters } from './models/getters'
import { View } from '@nativescript/core/ui'
import {
  getViewsByTags,
  getViewsByTypes,
  getViewsByClasses,
  getViewsByStyles,
  getViewsByValPairs,
  getViewsByProperties,
  getViewsByIdentifiers
} from './functions'

export * from './functions'

declare module '@nativescript/core' {
  interface View extends Getters {}
}

View.prototype.getViewsByTags = getViewsByTags
View.prototype.getViewsByTypes = getViewsByTypes
View.prototype.getViewsByClasses = getViewsByClasses
View.prototype.getViewsByStyles = getViewsByStyles
View.prototype.getViewsByValPairs = getViewsByValPairs
View.prototype.getViewsByProperties = getViewsByProperties
View.prototype.getViewsByIdentifiers = getViewsByIdentifiers

// Aliases
View.prototype.getViewsByProps = getViewsByProperties
View.prototype.getViewsByIds = getViewsByIdentifiers
