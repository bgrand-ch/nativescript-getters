import { View } from "@nativescript/core";
import { IValuePairs } from "../models/value-pairs.model";
declare const getViewsByValuePair: (valuePair: IValuePairs) => View[];
declare const getViewsByValuePairs: (...valuePairs: IValuePairs[]) => View[];
export { getViewsByValuePair, getViewsByValuePairs };
