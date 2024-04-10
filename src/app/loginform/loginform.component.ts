import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatDivider} from "@angular/material/divider";
import { MatLabel } from '@angular/material/form-field';

import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import { Location } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [
    MatFormField,
    MatDivider,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatLabel,
    MatInputModule,
    NgIf
  ],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss'
})
export class LoginformComponent implements OnInit{
  formdata:any;
  showPopup = true;
  @Output() close = new EventEmitter<void>();
  constructor(private location: Location


  ) { }
  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),

  });
  ngOnInit() {
    }
    goBack(){
    this.location.back();
    }

  onSubmit(){
    this.formdata={
      username:this.loginform.get('username')?.value,
      password:this.loginform.get('password')?.value,


    };
    console.log("helloooeawkehlaw")

    this.loginform.reset()

  }

}
