import {Component, Inject, Optional} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from "@angular/material/dialog";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-ui-messages',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    NgIf,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './ui-messages.component.html',
  styleUrl: './ui-messages.component.scss'
})
export class UiMessagesComponent {
  constructor(public dialogRef: MatDialogRef<UiMessagesComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public error_msg: any
  ) { }
  hoverImage=false;


  ngOnInit(): void {
    if(this.error_msg[1]=="1"){

    }
    else if(this.error_msg[1]=="2"){

    }
    else if(this.error_msg=='Please Choose a CSV File !!'){
      console.error("367457234823")

      this.hoverImage=true;
    }
    else if(this.error_msg=='You are already a candidate'){
      console.error('alread')
      this.hoverImage=true;
    }
    else if(this.error_msg=='Title already exists')
    {
      this.hoverImage=true;
    }
    else if(this.error_msg=='Manager exists in unfinished')
    {
      this.hoverImage=true
    }
    else{
      this.hoverImage=true
    }


  }
}
