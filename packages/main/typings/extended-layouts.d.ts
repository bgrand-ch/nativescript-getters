import {
  LayoutBase
} from "@nativescript/core";

import { IGettersMethods } from "../models/getters-methods.model";

declare module "@nativescript/core/ui/layouts/layout-base" {
  interface LayoutBase extends IGettersMethods {}
}
