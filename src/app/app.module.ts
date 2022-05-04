import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { MenuCardComponent } from './shared/side-menu/menu-card/menu-card.component';
import { FullscreenMenuComponent } from './shared/fullscreen-menu/fullscreen-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    TopbarComponent,
    SideMenuComponent,
    MenuCardComponent,
    FullscreenMenuComponent
    
  ],imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
    
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
