import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { Footer } from './footer/footer.component';
import { PointsListComponent } from './points-list/points-list.component';
import { TodoListService } from "./services/todo-list.service";
import { FormsModule } from "@angular/forms";
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    Footer,
    PointsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule
  ],
  providers: [{provide: "list", useClass: TodoListService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
