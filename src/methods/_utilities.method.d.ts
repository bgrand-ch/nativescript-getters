import { IValuePairs } from "../models/value-pairs.model";
import { View } from "tns-core-modules/ui/core/view/view";
declare function _getViews(parentView: View, searchedValues: string | Array<string | IValuePairs>, isAgreed: (vw: View, sVal: string | Array<string | IValuePairs>) => boolean): Array<View>;
declare function _hasOwnProperty(vw: View | object, val: string): boolean;
export { _getViews, _hasOwnProperty };
