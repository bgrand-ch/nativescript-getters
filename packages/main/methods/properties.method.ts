import {
    View
} from "@nativescript/core";

import { _getViews, _hasOwnProperty } from "./_utilities.method";

const getViewsByProperty = function (propertyName: string): Array<View> {

    const parentView = this as View;
    const isAgreed = (vw: View, sVal: string) => _hasOwnProperty(vw, sVal);
    const viewsFound = _getViews(parentView, propertyName, isAgreed);

    return viewsFound;

};

const getViewsByProperties = function (...propertyNames: Array<string>): Array<View> {

    const parentView = this as View;
    const isAgreed = (vw: View, sVal: Array<string>) => sVal.some((val) => _hasOwnProperty(vw, val));
    const viewsFound = _getViews(parentView, propertyNames, isAgreed);

    return viewsFound;

};

export { getViewsByProperty, getViewsByProperties };
