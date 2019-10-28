import { View } from "tns-core-modules/ui/core/view/view";
declare const getViewByIdentifier: (id: string) => any;
declare const getViewsByIdentifiers: (...identifiers: string[]) => View[];
export { getViewByIdentifier, getViewsByIdentifiers };
