import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { CarouselModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{FlexLayoutModule} from "@angular/flex-layout";
import{AppRoutingModule} from "./app.routes";
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    CarouselModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
