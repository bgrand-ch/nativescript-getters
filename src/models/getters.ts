import type { View } from '@nativescript/core'
import type { ValPair } from './val-pair'

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
   * @param {ValPair[]} styles - Style names and values of the views to find
   * @returns {View[]} Views that have been found
   */
  getViewsByStyles: (...styles: ValPair[]) => View[];

  /**
   * Browse the children’s value pairs from the parent view and retrieve the views corresponding to this value pairs
   * @public
   * @function getViewsByValPairs
   * @param {ValPair[]} valPairs - Property names and values of the views to find
   * @returns {View[]} Views that have been found
   */
   getViewsByValPairs: (...valPairs: ValPair[]) => View[];

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
