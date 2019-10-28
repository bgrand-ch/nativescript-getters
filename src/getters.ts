import { Frame } from "tns-core-modules/ui/frame/frame";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";
import { Page } from "tns-core-modules/ui/page/page";
import { TabNavigationBase } from "tns-core-modules/ui/tab-navigation-base/tab-navigation-base/tab-navigation-base";
import { TextBase } from "tns-core-modules/ui/text-base/text-base";

import { getViewsByTag, getViewsByTags } from "./methods/tags.method";
import { getViewsByType, getViewsByTypes } from "./methods/types.method";
import { getViewsByClass, getViewsByClasses } from "./methods/classes.method";
import { getViewsByProperty, getViewsByProperties } from "./methods/properties.method";
import { getViewsByValuePair, getViewsByValuePairs } from "./methods/value-pairs.method";
import { getViewByIdentifier, getViewsByIdentifiers } from "./methods/identifiers.method";

const nsClasses: Array<Frame|LayoutBase|Page|TabNavigationBase|TextBase> = [

    Frame.prototype,
    LayoutBase.prototype,
    Page.prototype,
    TabNavigationBase.prototype,
    TextBase.prototype

];
const newMethods = {

    // Tags (OK)
    getViewsByTag: {
        value: getViewsByTag
    },
    getViewsByTags: {
        value: getViewsByTags
    },

    // Types (OK)
    getViewsByType: {
        value: getViewsByType
    },
    getViewsByTypes: {
        value: getViewsByTypes
    },

    // Classes (OK)
    getViewsByClass: {
        value: getViewsByClass
    },
    getViewsByClasses: {
        value: getViewsByClasses
    },

    // Properties (OK)
    getViewsByProperty: {
        value: getViewsByProperty
    },
    getViewsByProp: { // alias
        value: getViewsByProperty
    },
    getViewsByAttribute: { // alias
        value: getViewsByProperty
    },
    getViewsByAttr: { // alias
        value: getViewsByProperty
    },
    getViewsByProperties: {
        value: getViewsByProperties
    },
    getViewsByProps: { // alias
        value: getViewsByProperties
    },
    getViewsByAttributes: { // alias
        value: getViewsByProperties
    },
    getViewsByAttrs: { // alias
        value: getViewsByProperties
    },

    // Value pairs (~OK)
    getViewsByValuePair: {
        value: getViewsByValuePair
    },
    getViewsByValPair: { // alias
        value: getViewsByValuePair
    },
    getViewsByValuePairs: {
        value: getViewsByValuePairs
    },
    getViewsByValPairs: { // alias
        value: getViewsByValuePairs
    },

    // Identifiers (OK)
    getViewByIdentifier: {
        value: getViewByIdentifier
    },
    getViewsByIdentifiers: {
        value: getViewsByIdentifiers
    }

};

nsClasses.forEach((nsClass) => {

    try {

        Object.defineProperties(nsClass, newMethods);

    } catch (error) {

        console.warn("-#########-- NATIVESCRIPT GETTERS PLUGIN WARNING --#########-", `NativeScript class: ${nsClass} //`, `Error ${error.name}: ${error.message}`);

    }

});
