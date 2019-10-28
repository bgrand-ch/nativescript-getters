import { IValuePairs } from "../models/value-pairs.model";
import { View } from "tns-core-modules/ui/core/view/view";

function _getViews(parentView: View, searchedValues: string|Array<string|IValuePairs>,
                   isAgreed: (vw: View, sVal: string|Array<string|IValuePairs>) => boolean): Array<View> {

    let viewsFound: Array<View> = [];

    parentView.eachChildView((view: View): boolean => {

        const isLayout: boolean = view.typeName.indexOf("Layout") !== -1;

        if (isAgreed(view, searchedValues)) {

            viewsFound.push(view);

        }

        if (isLayout) {

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
