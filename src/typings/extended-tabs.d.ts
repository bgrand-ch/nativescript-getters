import {
    TabNavigationBase
} from "@nativescript/core";

import { IGettersMethods } from "../models/getters-methods.model";

declare module "@nativescript/core/ui/tab-navigation-base/tab-navigation-base/tab-navigation-base" { // before: declare module "tns-core-modules/ui/tab-navigation-base/tab-navigation-base/tab-navigation-base"

    interface TabNavigationBase extends IGettersMethods {}

}
