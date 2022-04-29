import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  public validacionAuth: any;

  constructor(private fb: FormBuilder) { }

  usuario = {
    email: "gatitosLover33@hotmail.com",
    password: "gatito33"
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: ['gatoLover', [Validators.required]],
      password: ["gatito33", [Validators.required]],
      remember: [true]
    });
  }

  userAuth(inputEmail: String, inputPwd: String){
    if(inputEmail === this.usuario.email && inputPwd === this.usuario.password){
      this.validacionAuth = true;
    }else{
      this.validacionAuth = false;
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
