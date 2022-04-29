import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { Api1Component } from './api1/api1.component';
import { Api2Component } from './api2/api2.component';

const routes: Routes = [
  {path: 'menu', component:MenuComponent},
  {path: 'api1', component:Api1Component},
  {path: 'api2', component:Api2Component},
  {path: '', redirectTo:'/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
