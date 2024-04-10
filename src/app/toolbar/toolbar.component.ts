import {Component,OnInit, HostListener} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatAnchor,
    RouterLink,
    FlexLayoutModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  constructor() { }

  ngOnInit(): void {
  }
}
