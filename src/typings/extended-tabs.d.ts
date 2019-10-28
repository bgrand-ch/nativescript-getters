import { IGettersMethods } from "../models/getters-methods.model";
import { TabNavigationBase } from "tns-core-modules/ui/tab-navigation-base/tab-navigation-base/tab-navigation-base";

declare module "tns-core-modules/ui/tab-navigation-base/tab-navigation-base/tab-navigation-base" {

    interface TabNavigationBase extends IGettersMethods {}

}
