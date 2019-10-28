import { IValuePairs } from "../models/value-pairs.model";
import { View } from "tns-core-modules/ui/core/view/view";
declare const getViewsByValuePair: (propertyName: string, propertyValue: string | number | boolean) => View[];
declare const getViewsByValuePairs: (...valuePairs: IValuePairs[]) => View[];
export { getViewsByValuePair, getViewsByValuePairs };
