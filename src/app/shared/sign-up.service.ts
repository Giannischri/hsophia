import {Injectable} from '@angular/core';
import {FormGroup, ValidationErrors} from "@angular/forms";
import {UiMessagesComponent} from "../ui-messages/ui-messages.component";
import {MatDialog} from '@angular/material/dialog';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User, UserRole} from "./user";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private apiUrlRegister:'http://localhost:8080/user/register';
  constructor(private dialog:MatDialog,
              public http:HttpClient
  ) { }
  getFormValidationErrors(signupform:FormGroup):boolean{
     var valid:boolean;
    if(signupform.get('password')?.value!=signupform.get('password2')?.value)
    {
      this.UI_message('Passwords doesnt match')
      valid=false;
    }
    Object.keys(signupform.controls).forEach(key => {
      const controlErrors: ValidationErrors = signupform.get(key)!.errors!;
      if (controlErrors != null && key=='email') {
        this.UI_message('email not in valid form')
        valid=false;
      }
      if (controlErrors != null && key=='password') {
        this.UI_message('The password given does not conform to the allowed password patterns')
        valid=false;
      }

    })
    return valid;
  }
  postRegisterData(signupform:FormGroup):any{
    var resp:String;
    const userData: User = {
      username: signupform.get('username').value,
      email: signupform.get('email').value,
      password:signupform.get('password').value,
      role: UserRole.User
    };
    const headers=new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(`${this.apiUrlRegister}`,userData,{headers}).subscribe((response:any)=>{
      if(response)
        resp=response
    });
    console.log("response:",+resp!)
    return resp!
  }
  UI_message(error_msg: any) {
    this.dialog.open(UiMessagesComponent, {
      data: error_msg
    });
  }
}
