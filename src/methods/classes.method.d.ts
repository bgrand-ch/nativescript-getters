import { View } from "tns-core-modules/ui/core/view/view";
declare const getViewsByClass: (className: string) => View[];
declare const getViewsByClasses: (...classNames: string[]) => View[];
export { getViewsByClass, getViewsByClasses };
