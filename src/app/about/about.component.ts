import { Component } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";

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

}
