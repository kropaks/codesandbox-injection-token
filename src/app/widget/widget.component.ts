import { AfterContentInit, Component, ContentChild } from "@angular/core";
import { IReloadable } from "./widget-content.interface";
import { RELOADABLE_CONTENT } from "./widget.content.token";

@Component({
  selector: "app-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.css"]
})
export class WidgetComponent implements AfterContentInit {
  @ContentChild(RELOADABLE_CONTENT)
  content?: IReloadable;

  ngAfterContentInit(): void {
    if (this.content) {
      this.content.reload();
    }
  }
}
