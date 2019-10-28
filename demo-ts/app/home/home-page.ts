/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { View } from "tns-core-modules/ui/core/view";

import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    const textViewsFound: Array<View> = page.getViewsByTag("TextView");
    console.log("TextViews found:", textViewsFound);

    const layoutsFound: Array<View> = page.getViewsByType("layout");
    console.log("Layouts found:", layoutsFound);

    const classesFound: Array<View> = page.getViewsByClasses("bold", "italic");
    console.log("Classes found:", classesFound);

    const keyboardsFound: Array<View> = page.getViewsByProperty("keyboardType");
    console.log("Keyboards found:", keyboardsFound);

    const passwordFound: Array<View> = page.getViewsByValuePair("secure", "true");
    console.log("Password found:", passwordFound);

    const identifiersFound: Array<View> = page.getViewsByIdentifiers("main", "contact");
    console.log("Identifiers found:", identifiersFound);

    page.bindingContext = new HomeViewModel();
}
