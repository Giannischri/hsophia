import { Component } from '@angular/core';
import {MycarouselComponent} from "../mycarousel/mycarousel.component";
import {MyverticalcarouselComponent} from "../myverticalcarousel/myverticalcarousel.component";


@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    MycarouselComponent,
    MyverticalcarouselComponent
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})

export class GridComponent {
  ngOnInit(): void {

  }
}
