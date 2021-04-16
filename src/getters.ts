import {
  Frame,
  LayoutBase,
  Page,
  TextBase
} from "@nativescript/core";

import { getViewsByTag, getViewsByTags } from "./methods/tags.method";
import { getViewsByType, getViewsByTypes } from "./methods/types.method";
import { getViewsByClass, getViewsByClasses } from "./methods/classes.method";
import { getViewsByProperty, getViewsByProperties } from "./methods/properties.method";
import { getViewsByValuePair, getViewsByValuePairs } from "./methods/value-pairs.method";
import { getViewByIdentifier, getViewsByIdentifiers } from "./methods/identifiers.method";

const nsClasses: Array<Frame|LayoutBase|Page|TextBase> = [
  Frame.prototype,
  LayoutBase.prototype,
  Page.prototype,
  TextBase.prototype
];
const newMethods = {
  // Tags
  "getViewsByTag": {
      "value": getViewsByTag
  },
  "getViewsByTags": {
      "value": getViewsByTags
  },

  // Types
  "getViewsByType": {
      "value": getViewsByType
  },
  "getViewsByTypes": {
      "value": getViewsByTypes
  },

  // Classes
  "getViewsByClass": {
      "value": getViewsByClass
  },
  "getViewsByClasses": {
      "value": getViewsByClasses
  },

  // Properties
  "getViewsByProperty": {
      "value": getViewsByProperty
  },
  "getViewsByProp": { // alias
      "value": getViewsByProperty
  },
  "getViewsByAttribute": { // alias
      "value": getViewsByProperty
  },
  "getViewsByAttr": { // alias
      "value": getViewsByProperty
  },
  "getViewsByProperties": {
      "value": getViewsByProperties
  },
  "getViewsByProps": { // alias
      "value": getViewsByProperties
  },
  "getViewsByAttributes": { // alias
      "value": getViewsByProperties
  },
  "getViewsByAttrs": { // alias
      "value": getViewsByProperties
  },

  // Value pairs
  "getViewsByValuePair": {
      "value": getViewsByValuePair
  },
  "getViewsByValPair": { // alias
      "value": getViewsByValuePair
  },
  "getViewsByValuePairs": {
      "value": getViewsByValuePairs
  },
  "getViewsByValPairs": { // alias
      "value": getViewsByValuePairs
  },

  // Identifiers
  "getViewByIdentifier": {
      "value": getViewByIdentifier
  },
  "getViewsByIdentifiers": {
      "value": getViewsByIdentifiers
  }
};

nsClasses.forEach((nsClass) => {
  try {
    Object.defineProperties(nsClass, newMethods);
  } catch (error) {
    console.warn(
      "-#########-- NATIVESCRIPT GETTERS PLUGIN WARNING --#########-",
      `NativeScript class: ${nsClass} //`,
      `Error ${error.name}: ${error.message}`
    );
  }
});
