import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WidgetComponent } from "./widget/widget.component";
import { WeatherContentComponent } from "./widget/weather-content.component";
import { VelocityContentComponent } from "./widget/velocity-content.component";

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WeatherContentComponent,
    VelocityContentComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
