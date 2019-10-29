<template>
    <Page ref="homepage" class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <StackLayout id="main">
            <!-- Add your page content here -->

            <Label text="First name:"></Label>
            <TextField hint="First name..." class="bold"></TextField>

            <Label text="Last name:"></Label>
            <TextField hint="Last name..." class="italic"></TextField>

            <Label text="Description:"></Label>
            <TextView hint="Description..."></TextView>

            <StackLayout>

                <Label text="Address:"></Label>
                <TextView hint="Address..."></TextView>

                <Label text="Website:"></Label>
                <TextField hint="Website..." keyboardType="url"></TextField>

                <StackLayout id="contact">

                    <Label text="Email:"></Label>
                    <TextField hint="Email..." keyboardType="email"></TextField>

                    <Label text="Phone number:"></Label>
                    <TextField hint="Phone number..." keyboardType="phone"></TextField>

                </StackLayout>

            </StackLayout>

            <Label text="Password:"></Label>
            <TextField hint="Password..." secure="true"></TextField>

        </StackLayout>
    </Page>
</template>

<script>
    export default {
        mounted() {
            const page = this.$refs.homepage.nativeView;

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
        },
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .fa {
        color: $accent-dark;
    }

    .info {
        font-size: 20;
    }
</style>
