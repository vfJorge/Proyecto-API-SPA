import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { Api1Component } from './api1/api1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'menu', component:MenuComponent},
  {path: 'api1', component:Api1Component},
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: '', redirectTo:'/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
