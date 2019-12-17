<template>
    <Page @navigatingTo="onNavigatingTo" @loaded="onPageLoaded">

        <!-- GET VIEWS BY TAG -->
        <ActionBar title="Home">

            <ActionItem icon="font://&#xf121;" ios.position="right"></ActionItem>
            <ActionItem icon="font://&#xf188;" ios.position="right"></ActionItem>
            <ActionItem icon="font://&#xf0f4;" ios.position="right"></ActionItem>

        </ActionBar>

        <ScrollView>
            <!-- GET VIEWS BY TYPE -->
            <StackLayout>

                <!-- GET VIEWS BY TAGS -->
                <StackLayout>

                    <!-- GET VIEWS BY VALUE PAIRS -->
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4f/NativeScript_logo.png" stretch="none"></Image>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/200px-Unofficial_JavaScript_logo_2.svg.png" stretch="none"></Image>
                    <Image src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" stretch="none"></Image>
                
                </StackLayout>

                <WrapLayout>

                    <!-- GET VIEWS BY VALUE PAIRS -->
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/200px-Angular_full_color_logo.svg.png" stretch="fill"></Image>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/200px-Vue.js_Logo_2.svg.png" stretch="fill"></Image>

                </WrapLayout>

                <!-- GET VIEWS BY TYPES -->
                <GridLayout columns="*, *" rows="auto">

                    <DatePicker col="0" row="0"></DatePicker>
                    <TimePicker col="1" row="0"></TimePicker>
                
                </GridLayout>

                <TextField hint="Email..."></TextField>
                <TextView hint="Description..."></TextView>

                <!-- GET VIEWS BY PROPERTY -->
                <FlexboxLayout flexDirection="column">
                
                    <!-- GET VIEWS BY CLASS -->
                    <Label text="Lorem ipsum 1" class="h1"></Label>
                    <Label text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." textWrap="true"></Label>

                    <Label text="Lorem ipsum 2" class="h1"></Label>
                    <Label text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." textWrap="true"></Label>

                    <StackLayout>
                    
                        <!-- GET VIEWS BY VALUE PAIR -->
                        <Switch checked="true"></Switch>
                        <Switch checked="false"></Switch>
                        <Switch checked="false"></Switch>

                    </StackLayout>

                </FlexboxLayout>

                <StackLayout>
                    <StackLayout>
                        <StackLayout>
                            <StackLayout>
                                <StackLayout>
                                
                                    <!-- GET VIEW BY IDENTIFIER -->
                                    <Slider id="mySlider" value="1" minValue="0" maxValue="10"></Slider>

                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>

            </StackLayout>
        </ScrollView>

    </Page>
</template>

<script>
    import { isIOS } from "tns-core-modules/platform";
    import { AnimationCurve } from "tns-core-modules/ui/enums";

    export default {
        methods: {

            onNavigatingTo(args) {

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

            },

            onPageLoaded(args) {

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

        }
    };
</script>
