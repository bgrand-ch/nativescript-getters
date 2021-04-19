import { View } from "@nativescript/core";
declare const getViewsByClass: (className: string) => Array<View>;
declare const getViewsByClasses: (...classNames: Array<string>) => Array<View>;
export { getViewsByClass, getViewsByClasses };
