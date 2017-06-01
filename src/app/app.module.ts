import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MainFormComponent } from './main-form/main-form.component';
import { PointsListComponent } from './points-list/points-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MainFormComponent,
    PointsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
