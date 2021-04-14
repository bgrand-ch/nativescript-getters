import {
    View
} from "@nativescript/core";

import { _getViews } from "./_utilities.method";

const getViewByIdentifier = function (id: string): any {

    const parentView = this as View;
    const viewFound = parentView.getViewById(id) as View;

    return viewFound;

};

const getViewsByIdentifiers = function (...identifiers: Array<string>): Array<View> {

    const parentView = this as View;
    const notFound: number = -1;
    const isAgreed = (vw: View, sVal: Array<string>) => sVal.indexOf(vw.id) !== notFound;
    const viewsFound = _getViews(parentView, identifiers, isAgreed);

    return viewsFound;

};

export { getViewByIdentifier, getViewsByIdentifiers };
