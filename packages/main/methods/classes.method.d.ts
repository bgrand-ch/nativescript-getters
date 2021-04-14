import { View } from "@nativescript/core";
declare const getViewsByClass: (className: string) => View[];
declare const getViewsByClasses: (...classNames: string[]) => View[];
export { getViewsByClass, getViewsByClasses };
