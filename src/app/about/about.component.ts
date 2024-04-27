import { Component } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FlexLayoutModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isPhonePortrait = false;
  constructor(private responsive:BreakpointObserver) {
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
