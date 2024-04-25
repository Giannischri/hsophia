import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {GridComponent} from "./grid/grid.component";
import {CamerainterfaceComponent} from "./camerainterface/camerainterface.component";
import {MycarouselComponent} from "./mycarousel/mycarousel.component";
import {MyverticalcarouselComponent} from "./myverticalcarousel/myverticalcarousel.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {TimelineComponent} from "./timeline/timeline.component";
import {FooterComponent} from "./footer/footer.component";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, GridComponent, CamerainterfaceComponent, MycarouselComponent, MyverticalcarouselComponent, FlexLayoutModule, TimelineComponent, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hsophia';

  isPhonePortrait = false;

  constructor(private responsive: BreakpointObserver) {

  }

  ngOnInit() {

    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        console.log("yao");
        this.isPhonePortrait = false;

        if (result.matches) {
          this.isPhonePortrait = true;
        }

      });

  }
}
