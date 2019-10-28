import { IGettersMethods } from "../models/getters-methods.model";
import { TextBase } from "tns-core-modules/ui/text-base/text-base";

declare module "tns-core-modules/ui/text-base/text-base" {

    interface TextBase extends IGettersMethods {}

}
