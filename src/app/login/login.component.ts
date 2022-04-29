import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public validacionAuth: any;

  constructor() { }

  usuario = {
    email: "gatitosLover33@hotmail.com",
    password: "gatito33"
  }

  ngOnInit(): void {
  }

  userAuth(inputEmail: String, inputPwd: String){
    if(inputEmail === this.usuario.email && inputPwd === this.usuario.password){
      this.validacionAuth = true;
    }else{
      this.validacionAuth = false;
    }
  }

}
