import { View } from '@nativescript/core'

export interface Getters {
  /**
   * Browse the children’s tags from the parent view and retrieve the views corresponding to this tags
   * @public
   * @function getViewsByTags
   * @param {string[]} tagNames - Tag names of the views to find
   * @returns {View[]} Views that have been found
   */
  getViewsByTags: (...tagNames: string[]) => View[];

  /**
   * Browse the children’s types from the parent view and retrieve the views corresponding to this types
   * @public
   * @function getViewsByTypes
   * @param {string[]} typeNames - Type names of the views to find
   * @returns {View[]} Views that have been found
   */
  getViewsByTypes: (...typeNames: string[]) => View[];

  /**
   * Browse the children’s classes from the parent view and retrieve the views corresponding to this classes
   * @public
   * @function getViewsByClasses
   * @param {string[]} classNames - Class names of the views to find
   * @returns {View[]} Views that have been found
   */
  getViewsByClasses: (...classNames: string[]) => View[];

  /**
   * Browse the children’s styles from the parent view and retrieve the views corresponding to this styles
   * @public
   * @function getViewsByStyles
   * @param {string[]} styleNames - Style names of the views to find
   * @returns {View[]} Views that have been found
   */
  getViewsByStyles: (...styleNames: string[]) => View[];

  /**
   * Browse the children’s properties from the parent view and retrieve the views corresponding to this properties
   * @public
   * @function getViewsByProperties
   * @param {string[]} propNames - Property names of the views to find
   * @returns {View[]} Views that have been found
   */
  getViewsByProperties: (...propNames: string[]) => View[];

  /** @borrows getViewsByProperties as getViewsByProps */
  getViewsByProps: (...propNames: string[]) => View[]; // alias

  /**
   * Browse the children’s identifiers from the parent view and retrieve the views corresponding to this identifiers
   * @public
   * @function getViewsByIdentifiers
   * @param {string[]} idNames - Identifier names of the views to find
   * @returns {View[]} Views that have been found
   */
  getViewsByIdentifiers: (...idNames: string[]) => View[];

  /** @borrows getViewsByIdentifiers as getViewsByIds */
  getViewsByIds: (...idNames: string[]) => View[]; // alias
}
