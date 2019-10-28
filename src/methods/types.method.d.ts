import { View } from "tns-core-modules/ui/core/view/view";
declare const getViewsByType: (typeName: string) => View[];
declare const getViewsByTypes: (...typeNames: string[]) => View[];
export { getViewsByType, getViewsByTypes };
