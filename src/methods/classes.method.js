import { _getViews, _hasOwnProperty } from "./_utilities.method";
const getViewsByClass = function (className) {
    const parentView = this;
    const isAgreed = (vw, sVal) => _hasOwnProperty(vw, "className") && _hasClassName(vw, sVal);
    const viewsFound = _getViews(parentView, className, isAgreed);
    return viewsFound;
};
const getViewsByClasses = function (...classNames) {
    const parentView = this;
    const isAgreed = (vw, sVal) => _hasOwnProperty(vw, "className") && sVal.some((val) => _hasClassName(vw, val));
    const viewsFound = _getViews(parentView, classNames, isAgreed);
    return viewsFound;
};
function _hasClassName(vw, val) {
    const notFound = -1;
    return vw.className.indexOf(val) !== notFound;
}
export { getViewsByClass, getViewsByClasses };
