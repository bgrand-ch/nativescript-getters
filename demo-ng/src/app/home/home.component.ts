import { Component, AfterContentInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { ScrollView } from "tns-core-modules/ui/scroll-view";
import { LayoutBase, StackLayout, WrapLayout, FlexboxLayout } from "tns-core-modules/ui/layouts";
import { ActionBar, ActionItem } from "tns-core-modules/ui/action-bar";
import { Label } from "tns-core-modules/ui/label";
import { isIOS } from "tns-core-modules/platform";
import { Switch } from "tns-core-modules/ui/switch";
import { Image } from "tns-core-modules/ui/image";
import { Slider } from "tns-core-modules/ui/slider";
import { EventData } from "tns-core-modules/data/observable";
import { TextBase } from "tns-core-modules/ui/text-base";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { TimePicker } from "tns-core-modules/ui/time-picker";
import { AnimationCurve } from "tns-core-modules/ui/enums";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements AfterContentInit {

    constructor(private page: Page) {
        // Use the component constructor to inject providers.
    }

    ngAfterContentInit(): void {

        const scrollView = this.page.layoutView as ScrollView;
        const mainLayout = scrollView.content as LayoutBase;

        /*
            GET VIEWS BY TAG
        */

        const actionBar = this.page.getViewsByTag("ActionBar")[0] as ActionBar;
        const actionItems = actionBar.actionItems.getItems() as Array<ActionItem>;

        console.log("-#########-- GET VIEWS BY TAG -> ACTION BAR --#########-", actionBar);
        console.log("-#########-- ACTION BAR -> ACTION ITEMS --#########-", actionItems);

        actionItems.map((actionItem: ActionItem) => {
            
            actionItem.className = "fas";
        
        });

        /*
            GET VIEWS BY TAGS
        */

        const wsLayouts = mainLayout.getViewsByTags("WrapLayout", "StackLayout") as Array<WrapLayout|StackLayout>;

        console.log("-#########-- GET VIEWS BY TAGS -> WRAP & STACK LAYOUTS --#########-", wsLayouts);

        wsLayouts.map((wsLayout: WrapLayout|StackLayout) => {
            
            wsLayout.orientation = "horizontal";
        
        });

        /*
            GET VIEWS BY TYPE
        */

        const layouts = mainLayout.getViewsByType("layout") as Array<LayoutBase>;

        console.log("-#########-- GET VIEWS BY TYPE -> ALL LAYOUTS --#########-", layouts);

        layouts.map((layout: LayoutBase) => {
            
            layout.marginTop = 20;
        
        });

        /*
            GET VIEWS BY PROPERTY & CLASS
        */

        const flexboxLayout = mainLayout.getViewsByProperty("flexDirection")[0] as FlexboxLayout;
        const titles = flexboxLayout.getViewsByClass("h1") as Array<Label>;

        console.log("-#########-- GET VIEWS BY PROPERTY -> FLEXBOX LAYOUT --#########-", flexboxLayout);
        console.log("-#########-- GET VIEWS BY CLASS -> H1 TITLES --#########-", titles);

        titles.map((title: Label) => {

            if (isIOS) {

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
            
        }) as Array<Switch>;

        console.log("-#########-- GET VIEWS BY VALUE PAIR -> SWITCHS --#########-", switchs);

        switchs.map((sw: Switch) => {

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
        ) as Array<Image>;

        console.log("-#########-- GET VIEWS BY VALUE PAIRS -> IMAGES --#########-", images);

        images.map((image: Image) => {

            image.stretch = "aspectFit";
        
        });

        /*
            GET VIEW BY IDENTIFIER
        */

        const slider = mainLayout.getViewByIdentifier("mySlider") as Slider;

        console.log("-#########-- GET VIEW BY IDENTIFIER -> SLIDER --#########-", slider);

        slider.on("valueChange", (args: EventData) => {

            const slider = args.object as Slider;
            const newValue = slider.value;

            console.log("-#########-- SLIDER -> NEW VALUE --#########-", newValue);

        });

    }

    onLayoutLoaded(args: EventData): void {

        const mainLayout = args.object as LayoutBase;

        /*
            GET VIEWS BY TYPES
        */

        const textsAndPickers = mainLayout.getViewsByTypes("text", "picker") as Array<TextBase|DatePicker|TimePicker>;

        console.log("-#########-- GET VIEWS BY TYPES -> TEXTS & PICKERS --#########-", textsAndPickers);

        textsAndPickers.map((textOrPicker: TextBase|DatePicker|TimePicker) => {

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
}
