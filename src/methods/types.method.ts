// OK

import { View } from "tns-core-modules/ui/core/view/view";
import { _getViews, _hasOwnProperty } from "./_utilities.method";

const getViewsByType = function (typeName: string): Array<View> {

    const parentView = this as View;
    const isAgreed = (vw: View, sVal: string) => _hasTypeName(vw, sVal);
    const viewsFound = _getViews(parentView, typeName, isAgreed);

    return viewsFound;

}

const getViewsByTypes = function (...typeNames: Array<string>): Array<View> {

    const parentView = this as View;
    const isAgreed = (vw: View, sVal: Array<string>) => sVal.some(val => _hasTypeName(vw, val));
    const viewsFound = _getViews(parentView, typeNames, isAgreed);

    return viewsFound;

}

function _hasTypeName(vw: View, val: string): boolean {

    // In addition to native types bar, picker, view, layout, list and text
    const types = {

        form: [
            "Button",
            "DatePicker",
            "ListPicker",
            "Placeholder",
            "Switch",
            "TextField",
            "TextView",
            "TimePicker",
            "RadCalendar",
            "RadAutoCompleteTextView",
            "RadDataForm"
        ],
        field: [
            "SearchBar",
            "TextField",
            "TextView"
        ],
        tab: [
            "BottomNavigation",
            "Tabs",
            "TabView"
        ]

    };
    const typeName: string = vw.typeName;

    return (_hasOwnProperty(types, val) && types[val].indexOf(typeName) !== -1)
            || typeName.search(new RegExp(val, "i")) !== -1;

}

export { getViewsByType, getViewsByTypes };
