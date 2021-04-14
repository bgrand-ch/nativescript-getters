import {
    View
} from "@nativescript/core";

import { IValuePairs } from "../models/value-pairs.model";
import { _getViews, _hasOwnProperty } from "./_utilities.method";

const getViewsByValuePair = function (valuePair: IValuePairs): Array<View> {

    const parentView = this as View;
    const isAgreed = (vw: View, sVal: IValuePairs) => _hasOwnProperty(vw, sVal.propertyName) && vw[sVal.propertyName] == sVal.propertyValue;
    const viewsFound = _getViews(parentView, valuePair, isAgreed);

    return viewsFound;

};

const getViewsByValuePairs = function (...valuePairs: Array<IValuePairs>): Array<View> {

    const parentView = this as View;
    const isAgreed = (vw: View, sVal: Array<IValuePairs>) => sVal.some((val) => _hasOwnProperty(vw, val.propertyName) && vw[val.propertyName] == val.propertyValue);
    const viewsFound = _getViews(parentView, valuePairs, isAgreed);

    return viewsFound;

};

export { getViewsByValuePair, getViewsByValuePairs };
