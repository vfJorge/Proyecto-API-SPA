import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { Api1Component } from './api1/api1.component';
import { Api2Component } from './api2/api2.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Api3Component } from './api3/api3.component';
import { FilterMangaPipe } from './Pipes/filter-manga.pipe';
import { Api4Component } from './api4/api4.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Api1Component,
    Api2Component,
    FilterPipe,
    Api3Component,
    FilterMangaPipe,
    Api4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
