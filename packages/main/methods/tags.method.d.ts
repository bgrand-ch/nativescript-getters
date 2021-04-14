import { View } from "@nativescript/core";
declare const getViewsByTag: (tagName: string) => View[];
declare const getViewsByTags: (...tagNames: string[]) => View[];
export { getViewsByTag, getViewsByTags };
