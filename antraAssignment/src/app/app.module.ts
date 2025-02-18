import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { HideDerective } from "./hide-after5-secs.directive";




@NgModule({
    declarations:[AppComponent],
    imports: [BrowserModule, HideDerective],
    bootstrap: [AppComponent],
})
export class AppModule{}