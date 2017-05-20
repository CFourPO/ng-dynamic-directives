import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HostComponent } from './host/host.component';
import { HostDirective } from './host/host.directive';
import {CommonModule} from "@angular/common";
import {LoaderService} from "./host/loader.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    HostComponent,
    HostDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [UserComponent, AdminComponent]
})
export class AppModule { }
