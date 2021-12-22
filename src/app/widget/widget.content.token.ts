import { InjectionToken } from "@angular/core";
import { IReloadable } from "./widget-content.interface";

export const RELOADABLE_CONTENT = new InjectionToken<IReloadable>(
  "reloadable-content"
);
