import { View } from "tns-core-modules/ui/core/view/view";
declare const getViewsByProperty: (propertyName: string) => View[];
declare const getViewsByProperties: (...propertyNames: string[]) => View[];
export { getViewsByProperty, getViewsByProperties };
