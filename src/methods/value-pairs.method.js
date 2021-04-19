import { _getViews, _hasOwnProperty } from "./_utilities.method";
const getViewsByValuePair = function (valuePair) {
    const parentView = this;
    const isAgreed = (vw, sVal) => _hasOwnProperty(vw, sVal.propertyName) && vw[sVal.propertyName] == sVal.propertyValue;
    const viewsFound = _getViews(parentView, valuePair, isAgreed);
    return viewsFound;
};
const getViewsByValuePairs = function (...valuePairs) {
    const parentView = this;
    const isAgreed = (vw, sVal) => sVal.some((val) => _hasOwnProperty(vw, val.propertyName) && vw[val.propertyName] == val.propertyValue);
    const viewsFound = _getViews(parentView, valuePairs, isAgreed);
    return viewsFound;
};
export { getViewsByValuePair, getViewsByValuePairs };
