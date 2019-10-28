import { IGettersMethods } from "../models/getters-methods.model";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";

declare module "tns-core-modules/ui/layouts/layout-base" {

    interface LayoutBase extends IGettersMethods {}

}
