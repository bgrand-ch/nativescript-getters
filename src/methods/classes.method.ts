import { View } from "tns-core-modules/ui/core/view/view";
import { _getViews, _hasOwnProperty } from "./_utilities.method";

const getViewsByClass = function (className: string): Array<View> {

    const parentView = this as View;
    const isAgreed = (vw: View, sVal: string) => _hasOwnProperty(vw, "className") && _hasClassName(vw, sVal);
    const viewsFound = _getViews(parentView, className, isAgreed);

    return viewsFound;

}

const getViewsByClasses = function (...classNames: Array<string>): Array<View> {

    const parentView = this as View;
    const isAgreed = (vw: View, sVal: Array<string>) => _hasOwnProperty(vw, "className") && sVal.some(val => _hasClassName(vw, val));
    const viewsFound = _getViews(parentView, classNames, isAgreed);

    return viewsFound;

}

function _hasClassName(vw: View, val: string): boolean {

    return vw.className.indexOf(val) !== -1;

}

export { getViewsByClass, getViewsByClasses };
