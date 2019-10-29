import { IValuePairs } from "../models/value-pairs.model";
import { View } from "tns-core-modules/ui/core/view/view";
import { _getViews, _hasOwnProperty } from "./_utilities.method";

const getViewsByValuePair = function (propertyName: string, propertyValue: string|number|boolean): Array<View> {

    const parentView = this as View;
    const isAgreed = (vw: View, sVal: string) => _hasOwnProperty(vw, sVal) && vw[sVal] === propertyValue;
    const viewsFound = _getViews(parentView, propertyName, isAgreed);

    return viewsFound;

}

const getViewsByValuePairs = function (...valuePairs: Array<IValuePairs>): Array<View> {

    const parentView = this as View;
    const isAgreed = (vw: View, sVal: Array<IValuePairs>) => sVal.some(val => _hasOwnProperty(vw, val.propertyName) && vw[val.propertyName] === val.propertyValue);
    const viewsFound = _getViews(parentView, valuePairs, isAgreed);

    return viewsFound;

}

export { getViewsByValuePair, getViewsByValuePairs };
