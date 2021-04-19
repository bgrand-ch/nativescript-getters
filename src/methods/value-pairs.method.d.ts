import { View } from "@nativescript/core";
import { IValuePairs } from "../models/value-pairs.model";
declare const getViewsByValuePair: (valuePair: IValuePairs) => Array<View>;
declare const getViewsByValuePairs: (...valuePairs: Array<IValuePairs>) => Array<View>;
export { getViewsByValuePair, getViewsByValuePairs };
