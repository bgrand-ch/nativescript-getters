import { IGettersMethods } from "../models/getters-methods.model";
import { Frame } from "tns-core-modules/ui/frame/frame";

declare module "tns-core-modules/ui/frame/frame" {

    interface Frame extends IGettersMethods {}

}
