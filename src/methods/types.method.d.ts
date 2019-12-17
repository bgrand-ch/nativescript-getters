import { View } from "@nativescript/core";
declare const getViewsByType: (typeName: string) => View[];
declare const getViewsByTypes: (...typeNames: string[]) => View[];
export { getViewsByType, getViewsByTypes };
