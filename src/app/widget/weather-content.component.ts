import { Component } from "@angular/core";
import { IReloadable, IWidgetContent } from "./widget-content.interface";
import { RELOADABLE_CONTENT } from "./widget.content.token";

@Component({
  selector: "app-weather-content",
  template: ` <h5>Weather</h5> `,
  styleUrls: [],
  providers: [
    { provide: RELOADABLE_CONTENT, useExisting: WeatherContentComponent }
  ]
})
export class WeatherContentComponent implements IWidgetContent, IReloadable {
  id: number = 2;
  loading: boolean = false;
  reload(): void {
    console.log("Weather reloading....");
  }
  ngOnInit(): void {}
}
