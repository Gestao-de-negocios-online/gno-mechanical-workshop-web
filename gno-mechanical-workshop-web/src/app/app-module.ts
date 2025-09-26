import {NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing-module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './layouts/navbar-component/navbar-component';
import {MainContextComponent} from './layouts/main-context-component/main-context-component';
import {LeftMenuComponent} from './layouts/left-menu-component/left-menu-component';
import {TopMenuComponent} from './layouts/top-menu-component/top-menu-component';
import {HomeComponent} from './layouts/home-component/home-component';
import {CoreModule} from "./core/core-module";
import {ButtonComponent} from './shared/components/button-component/button-component';
import {ClientModule} from "./features/client/client.module";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        MainContextComponent,
        LeftMenuComponent,
        TopMenuComponent,
        HomeComponent,
        ButtonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        ClientModule
    ],
    providers: [provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection()],
    bootstrap: [AppComponent]
})
export class AppModule {
}
