import {
  Page
} from "@nativescript/core";

import { IGettersMethods } from "../models/getters-methods.model";

declare module "@nativescript/core/ui/page/page" {
  interface Page extends IGettersMethods {}
}
