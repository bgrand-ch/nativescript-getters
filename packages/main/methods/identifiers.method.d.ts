import { View } from "@nativescript/core";
declare const getViewByIdentifier: (id: string) => any;
declare const getViewsByIdentifiers: (...identifiers: string[]) => View[];
export { getViewByIdentifier, getViewsByIdentifiers };
