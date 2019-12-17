import { View } from "@nativescript/core";
declare const getViewsByProperty: (propertyName: string) => View[];
declare const getViewsByProperties: (...propertyNames: string[]) => View[];
export { getViewsByProperty, getViewsByProperties };
