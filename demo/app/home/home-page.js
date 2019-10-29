/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {

    const page = args.object;

    const textViewsFound = page.getViewsByTag("TextView");
    console.log("TextViews found:", textViewsFound);

    const layoutsFound = page.getViewsByType("layout");
    console.log("Layouts found:", layoutsFound);

    const classesFound = page.getViewsByClasses("bold", "italic");
    console.log("Classes found:", classesFound);

    const keyboardsFound = page.getViewsByProperty("keyboardType");
    console.log("Keyboards found:", keyboardsFound);

    const passwordFound = page.getViewsByValuePair("secure", "true");
    console.log("Password found:", passwordFound);

    const identifiersFound = page.getViewsByIdentifiers("main", "contact");
    console.log("Identifiers found:", identifiersFound);

    page.bindingContext = new HomeViewModel();

}

exports.onNavigatingTo = onNavigatingTo;
