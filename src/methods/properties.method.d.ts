import { View } from "@nativescript/core";
declare const getViewsByProperty: (propertyName: string) => Array<View>;
declare const getViewsByProperties: (...propertyNames: Array<string>) => Array<View>;
export { getViewsByProperty, getViewsByProperties };
