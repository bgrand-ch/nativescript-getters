import {
  Frame
} from "@nativescript/core";

import { IGettersMethods } from "../models/getters-methods.model";

declare module "@nativescript/core/ui/frame/frame" {
  interface Frame extends IGettersMethods {}
}
