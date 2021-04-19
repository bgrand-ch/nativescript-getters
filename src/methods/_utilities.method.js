function _getViews(parentView, searchedValues, isAgreed) {
    let viewsFound = [];
    parentView.eachChildView((view) => {
        const notFound = -1;
        const typeName = _hasOwnProperty(view, "typeName") ? view.typeName.toLowerCase() : "";
        const isLayout = typeName.indexOf("layout") !== notFound;
        const isScrollView = typeName.indexOf("scroll") !== notFound;
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
function _hasOwnProperty(vw, val) {
    return typeof vw[val] !== "undefined";
}
export { _getViews, _hasOwnProperty };
