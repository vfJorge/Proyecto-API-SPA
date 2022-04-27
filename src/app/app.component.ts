import { Component } from '@angular/core';
import { ValidaremailService } from './services/validaremail.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api_project';

  public validacionEmail: any;

  constructor(private validaremailService: ValidaremailService){
    // Revisar si es necesario poner el validaremailService en el método del constructor
  }

  sendEmail(emailResp: string){
    this.validaremailService.getValidateEmail(emailResp).subscribe((resp: any) => {
      this.validacionEmail=resp
    })
  }
}
