import { Component, OnInit } from '@angular/core';
import { ValidaremailService } from '../services/validaremail.service';

@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component implements OnInit {

  public validacionEmail: any;

  constructor(private validaremailService: ValidaremailService){
  }

  sendEmail(emailResp: string){
    this.validaremailService.getValidateEmail(emailResp).subscribe((resp: any) => {
      this.validacionEmail=resp
    })
  }

  ngOnInit(): void {
  }

}
