import {
  View
} from "@nativescript/core";

import { IValuePairs } from "./value-pairs.model";

interface IGettersMethods {
  /**
   * Browse the children’s tags from the parent view and retrieve the views corresponding to this tag
   * @public
   * @function getViewsByTag
   * @param {string} tagName - Tag name of the views to find
   * @return {Array<View>} Views that have been found
   */
  getViewsByTag<T extends View>(tagName: string): Array<T>;

  /**
   * Browse the children’s tags from the parent view and retrieve the views corresponding to this tags
   * @public
   * @function getViewsByTags
   * @param {Array<string>} tagNames - Tag names of the views to find
   * @return {Array<View>} Views that have been found
   */
  getViewsByTags<T extends View>(...tagNames: Array<string>): Array<T>;

  /**
   * Browse the children’s types from the parent view and retrieve the views corresponding to this type
   * @public
   * @function getViewsByType
   * @param {string} typeName - Type name of the views to find
   * @return {Array<View>} Views that have been found
   */
  getViewsByType<T extends View>(typeName: string): Array<T>;

  /**
   * Browse the children’s types from the parent view and retrieve the views corresponding to this types
   * @public
   * @function getViewsByTypes
   * @param {Array<string>} typeNames - Type names of the views to find
   * @return {Array<View>} Views that have been found
   */
  getViewsByTypes<T extends View>(...typeNames: Array<string>): Array<T>;

  /**
   * Browse the children’s classes from the parent view and retrieve the views corresponding to this class
   * @public
   * @function getViewsByClass
   * @param {string} className - Class name of the views to find
   * @return {Array<View>} Views that have been found
   */
  getViewsByClass<T extends View>(className: string): Array<T>;

  /**
   * Browse the children’s classes from the parent view and retrieve the views corresponding to this classes
   * @public
   * @function getViewsByClasses
   * @param {Array<string>} classNames - Class names of the views to find
   * @return {Array<View>} Views that have been found
   */
  getViewsByClasses<T extends View>(...classNames: Array<string>): Array<T>;

  /**
   * Browse the children’s properties from the parent view and retrieve the views corresponding to this property
   * @public
   * @function getViewsByProperty
   * @param {string} propertyName - Property name of the views to find
   * @return {Array<View>} Views that have been found
   */
  getViewsByProperty<T extends View>(propertyName: string): Array<T>;

  /** @borrows getViewsByProperty as getViewsByProp */
  getViewsByProp<T extends View>(propertyName: string): Array<T>; // alias

  /** @borrows getViewsByProperty as getViewsByAttribute */
  getViewsByAttribute<T extends View>(propertyName: string): Array<T>; // alias

  /** @borrows getViewsByProperty as getViewsByAttr */
  getViewsByAttr<T extends View>(propertyName: string): Array<T>; // alias

  /**
   * Browse the children’s properties from the parent view and retrieve the views corresponding to this properties
   * @public
   * @function getViewsByProperties
   * @param {Array<string>} propertyNames - Property names of the views to find
   * @return {Array<View>} Views that have been found
   */
  getViewsByProperties<T extends View>(...propertyNames: Array<string>): Array<T>;

  /** @borrows getViewsByProperties as getViewsByProps */
  getViewsByProps<T extends View>(...propertyNames: Array<string>): Array<T>; // alias

  /** @borrows getViewsByProperties as getViewsByAttributes */
  getViewsByAttributes<T extends View>(...propertyNames: Array<string>): Array<T>; // alias

  /** @borrows getViewsByProperties as getViewsByAttrs */
  getViewsByAttrs<T extends View>(...propertyNames: Array<string>): Array<T>; // alias

  /**
   * Browse the children’s properties, and their value, from the parent view and retrieve the views corresponding to this value pair
   * @public
   * @function getViewsByValuePair
   * @param {string} propertyName - Property name of the views to find
   * @param {string|number|boolean} propertyValue - Value of "propertyName"
   * @return {Array<View>} Views that have been found
   */
  getViewsByValuePair<T extends View>(valuePair: IValuePairs): Array<T>;

  /** @borrows getViewsByValuePair as getViewsByValPair */
  getViewsByValPair<T extends View>(valuePair: IValuePairs): Array<T>; // alias

  /**
   * Browse the children’s properties, and their value, from the parent view and retrieve the views corresponding to this value pairs
   * @public
   * @function getViewsByValuePairs
   * @param {Array<IValuePairs>} valuePairs - Property names, and their value, of the views to find
   * @return {Array<View>} Views that have been found
   */
  getViewsByValuePairs<T extends View>(...valuePairs: Array<IValuePairs>): Array<T>;

  /** @borrows getViewsByValuePairs as getViewsByValPairs */
  getViewsByValPairs<T extends View>(...valuePairs: Array<IValuePairs>): Array<T>; // alias

  /**
   * Browse the children’s identifiers from the parent view and retrieve the views corresponding to this identifiers
   * @public
   * @function getViewsByIdentifiers
   * @param {Array<string>} identifiers - Identifiers of the views to find
   * @return {Array<View>} Views that have been found
   */
  getViewsByIdentifiers<T extends View>(...identifiers: Array<string>): Array<T>;

  /** @borrows getViewById as getViewByIdentifier */
  getViewByIdentifier<T extends View>(id: string): T; // alias of native method "getViewById"
}

export { IGettersMethods };
