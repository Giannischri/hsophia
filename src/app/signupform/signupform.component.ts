import {Component, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import { MatLabel } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {RouterLink} from "@angular/router";
import {SignUpService} from "../shared/sign-up.service";


@Component({
  selector: 'app-signupform',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    ReactiveFormsModule,
    MatInputModule,
    MatInput,
    FlexLayoutModule,
    MatLabel,
    MatDialogTitle,
    RouterLink
  ],
  templateUrl: './signupform.component.html',
  styleUrl: './signupform.component.scss'
})
export class SignupformComponent implements OnInit {
  signupform = new FormGroup({
    firstname: new FormControl('',Validators.required),
    secondname: new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[
      Validators.required,
      Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{8,20}$')
    ]),
    password2:new FormControl('',[ Validators.required,
      Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{8,20}$')])
  })
  constructor() {

  }
  ngOnInit() {

  }
  onSubmit()
  {

  }
}
