// OK

import { View } from "tns-core-modules/ui/core/view/view";
import { _getViews } from "./_utilities.method";

const getViewsByTag = function (tagName: string): Array<View> {

    const parentView = this as View;
    const isAgreed = (vw: View, sVal: string) => vw.typeName === sVal;
    const viewsFound = _getViews(parentView, tagName, isAgreed);

    return viewsFound;

}

const getViewsByTags = function (...tagNames: Array<string>): Array<View> {

    const parentView = this as View;
    const isAgreed = (vw: View, sVal: Array<string>) => sVal.indexOf(vw.typeName) !== -1;
    const viewsFound = _getViews(parentView, tagNames, isAgreed);

    return viewsFound;

}

export { getViewsByTag, getViewsByTags };
