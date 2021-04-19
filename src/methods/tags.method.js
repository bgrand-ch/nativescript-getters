import { _getViews } from "./_utilities.method";
const getViewsByTag = function (tagName) {
    const parentView = this;
    const isAgreed = (vw, sVal) => vw.typeName === sVal;
    const viewsFound = _getViews(parentView, tagName, isAgreed);
    return viewsFound;
};
const getViewsByTags = function (...tagNames) {
    const parentView = this;
    const notFound = -1;
    const isAgreed = (vw, sVal) => sVal.indexOf(vw.typeName) !== notFound;
    const viewsFound = _getViews(parentView, tagNames, isAgreed);
    return viewsFound;
};
export { getViewsByTag, getViewsByTags };
