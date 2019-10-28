import { Component, AfterViewChecked } from "@angular/core";

import { Page } from "tns-core-modules/ui/page";
import { View } from "tns-core-modules/ui/core/view";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements AfterViewChecked {

    constructor(private _page: Page) {
        // Use the component constructor to inject providers.
    }

    ngAfterViewChecked(): void {
        // Init your component properties here.

        const pageLayout = this._page.getViewById("main") as StackLayout;

        const textViewsFound: Array<View> = pageLayout.getViewsByTag("TextView");
        console.log("TextViews found:", textViewsFound);

        const layoutsFound: Array<View> = pageLayout.getViewsByType("layout");
        console.log("Layouts found:", layoutsFound);

        const classesFound: Array<View> = pageLayout.getViewsByClasses("bold", "italic");
        console.log("Classes found:", classesFound);

        const keyboardsFound: Array<View> = pageLayout.getViewsByProperty("keyboardType");
        console.log("Keyboards found:", keyboardsFound);

        const passwordFound: Array<View> = pageLayout.getViewsByValuePair("secure", "true");
        console.log("Password found:", passwordFound);

        const identifiersFound: Array<View> = pageLayout.getViewsByIdentifiers("main", "contact");
        console.log("Identifiers found:", identifiersFound);
    }
}
