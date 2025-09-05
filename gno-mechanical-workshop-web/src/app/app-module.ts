import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavbarComponent } from './layouts/navbar-component/navbar-component';
import { MainContextComponent } from './layouts/main-context-component/main-context-component';
import { LeftMenuComponent } from './layouts/left-menu-component/left-menu-component';
import { TopMenuComponent } from './layouts/top-menu-component/top-menu-component';
import { HomeComponent } from './layouts/home-component/home-component';

@NgModule({
  declarations: [
    App,
    NavbarComponent,
    MainContextComponent,
    LeftMenuComponent,
    TopMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
