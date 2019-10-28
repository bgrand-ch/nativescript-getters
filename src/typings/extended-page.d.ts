import { IGettersMethods } from "../models/getters-methods.model";
import { Page } from "tns-core-modules/ui/page/page";

declare module "tns-core-modules/ui/page/page" {

    interface Page extends IGettersMethods {}

}
