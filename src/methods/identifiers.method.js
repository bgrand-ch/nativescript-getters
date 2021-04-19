import { _getViews } from "./_utilities.method";
const getViewByIdentifier = function (id) {
    const parentView = this;
    const viewFound = parentView.getViewById(id);
    return viewFound;
};
const getViewsByIdentifiers = function (...identifiers) {
    const parentView = this;
    const notFound = -1;
    const isAgreed = (vw, sVal) => sVal.indexOf(vw.id) !== notFound;
    const viewsFound = _getViews(parentView, identifiers, isAgreed);
    return viewsFound;
};
export { getViewByIdentifier, getViewsByIdentifiers };
