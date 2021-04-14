import {
    View
} from "@nativescript/core";

import { IValuePairs } from "../models/value-pairs.model";

function _getViews(parentView: View, searchedValues: string|Array<string|IValuePairs>|IValuePairs,
                   isAgreed: (vw: View, sVal: string|Array<string|IValuePairs>|IValuePairs) => boolean): Array<View> {

    let viewsFound: Array<View> = [];

    parentView.eachChildView((view: View): boolean => {

        const notFound: number = -1;
        const typeName: string = _hasOwnProperty(view, "typeName") ? view.typeName.toLowerCase() : "";
        const isLayout: boolean = typeName.indexOf("layout") !== notFound;
        const isScrollView: boolean = typeName.indexOf("scroll") !== notFound;

        if (isAgreed(view, searchedValues)) {

            viewsFound.push(view);

        }

        if (isLayout || isScrollView) {

            // Merge the found views of the recursive search
            viewsFound = [...viewsFound, ..._getViews(view, searchedValues, isAgreed)];

        }

        return true;

    });

    return viewsFound;

}

function _hasOwnProperty(vw: View|object, val: string): boolean {

    return typeof vw[val] !== "undefined";

}

export { _getViews, _hasOwnProperty };
