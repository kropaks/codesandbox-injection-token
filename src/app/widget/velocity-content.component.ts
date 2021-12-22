import { Component } from "@angular/core";
import { IWidgetContent } from "./widget-content.interface";

@Component({
  selector: "app-velocity-content",
  template: ` <h5>Velocity</h5> `,
  styles: []
})
export class VelocityContentComponent implements IWidgetContent {
  id: number = 1;

  ngOnInit(): void {}
}
