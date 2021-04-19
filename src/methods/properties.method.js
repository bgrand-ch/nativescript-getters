import { _getViews, _hasOwnProperty } from "./_utilities.method";
const getViewsByProperty = function (propertyName) {
    const parentView = this;
    const isAgreed = (vw, sVal) => _hasOwnProperty(vw, sVal);
    const viewsFound = _getViews(parentView, propertyName, isAgreed);
    return viewsFound;
};
const getViewsByProperties = function (...propertyNames) {
    const parentView = this;
    const isAgreed = (vw, sVal) => sVal.some((val) => _hasOwnProperty(vw, val));
    const viewsFound = _getViews(parentView, propertyNames, isAgreed);
    return viewsFound;
};
export { getViewsByProperty, getViewsByProperties };
