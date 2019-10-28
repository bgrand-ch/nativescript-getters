import { View } from "tns-core-modules/ui/core/view/view";
declare const getViewsByTag: (tagName: string) => View[];
declare const getViewsByTags: (...tagNames: string[]) => View[];
export { getViewsByTag, getViewsByTags };
