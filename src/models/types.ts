import type { View } from '@nativescript/core'
import type { Styles } from './styles'

export type GetViews = (...values: string[] | Styles[]) => View[]

export type IsChecked = (values: string[] | Styles[]) => boolean
