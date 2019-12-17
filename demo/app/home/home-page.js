const platformModule = require("tns-core-modules/platform");
const AnimationCurve = require("tns-core-modules/ui/enums").AnimationCurve;

function onNavigatingTo(args) {

    const page = args.object;
    const scrollView = page.content;
    const mainLayout = scrollView.content;

    /*
        GET VIEWS BY TAG
    */

    const actionBar = page.getViewsByTag("ActionBar")[0];
    const actionItems = actionBar.actionItems.getItems();

    console.log("-#########-- GET VIEWS BY TAG -> ACTION BAR --#########-", actionBar);
    console.log("-#########-- ACTION BAR -> ACTION ITEMS --#########-", actionItems);

    actionItems.map((actionItem) => {
        
        actionItem.className = "fas";
    
    });

    /*
        GET VIEWS BY TAGS
    */

    const wsLayouts = mainLayout.getViewsByTags("WrapLayout", "StackLayout");

    console.log("-#########-- GET VIEWS BY TAGS -> WRAP & STACK LAYOUTS --#########-", wsLayouts);

    wsLayouts.map((wsLayout) => {
        
        wsLayout.orientation = "horizontal";
    
    });

    /*
        GET VIEWS BY TYPE
    */

    const layouts = mainLayout.getViewsByType("layout");

    console.log("-#########-- GET VIEWS BY TYPE -> ALL LAYOUTS --#########-", layouts);

    layouts.map((layout) => {
        
        layout.marginTop = 20;
    
    });

    /*
        GET VIEWS BY PROPERTY & CLASS
    */

    const flexboxLayout = mainLayout.getViewsByProperty("flexDirection")[0];
    const titles = flexboxLayout.getViewsByClass("h1");

    console.log("-#########-- GET VIEWS BY PROPERTY -> FLEXBOX LAYOUT --#########-", flexboxLayout);
    console.log("-#########-- GET VIEWS BY CLASS -> H1 TITLES --#########-", titles);

    titles.map((title) => {

        if (platformModule.isIOS) {

            title.letterSpacing = .6;

        } else {

            title.letterSpacing = .2;

        }
    
    });

    /*
        GET VIEWS BY VALUE PAIR
    */

    const switchs = mainLayout.getViewsByValuePair({

        propertyName: "checked",
        propertyValue: false
        
    });

    console.log("-#########-- GET VIEWS BY VALUE PAIR -> SWITCHS --#########-", switchs);

    switchs.map((sw) => {

        sw.checked = true;
    
    });

    /*
        GET VIEWS BY VALUE PAIRS
    */

    const images = mainLayout.getViewsByValuePairs(
        {
            propertyName: "stretch",
            propertyValue: "none"
        },
        {
            propertyName: "stretch",
            propertyValue: "fill"
        }
    );

    console.log("-#########-- GET VIEWS BY VALUE PAIRS -> IMAGES --#########-", images);

    images.map((image) => {

        image.stretch = "aspectFit";
    
    });

    /*
        GET VIEW BY IDENTIFIER
    */

    const slider = mainLayout.getViewByIdentifier("mySlider");

    console.log("-#########-- GET VIEW BY IDENTIFIER -> SLIDER --#########-", slider);

    slider.on("valueChange", (args) => {

        const newValue = args.object.value;

        console.log("-#########-- SLIDER -> NEW VALUE --#########-", newValue);

    });

}

function onPageLoaded(args) {

    const page = args.object;
    const scrollView = page.content;
    const mainLayout = scrollView.content;

    /*
        GET VIEWS BY TYPES
    */

    const textsAndPickers = mainLayout.getViewsByTypes("text", "picker");

    console.log("-#########-- GET VIEWS BY TYPES -> TEXTS & PICKERS --#########-", textsAndPickers);

    textsAndPickers.map((textOrPicker) => {

        textOrPicker.opacity = 0;
        
        textOrPicker.animate({

            curve: AnimationCurve.easeIn,
            duration: 1000,
            opacity: 1

        }).then(() => {
        
            console.log("-#########-- TEXTS & PICKERS -> ANIMATION FINISHED --#########-");
        
        }).catch((error) => {
        
            console.log("-#########-- TEXTS & PICKERS -> ANIMATION ERROR --#########-", error.message);
        
        });

    });

}

exports.onNavigatingTo = onNavigatingTo;
exports.onPageLoaded = onPageLoaded;
