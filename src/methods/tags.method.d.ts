import { View } from "@nativescript/core";
declare const getViewsByTag: (tagName: string) => Array<View>;
declare const getViewsByTags: (...tagNames: Array<string>) => Array<View>;
export { getViewsByTag, getViewsByTags };
