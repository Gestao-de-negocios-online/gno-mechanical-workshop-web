import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientDetailComponent} from './components/client-detail/client-detail.component';
import {ClientListComponent} from './components/client-list/client-list.component';
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {ClientRoutingModule} from "./client-routing.module";
import {ClientsService} from "./services/clients-service";

@NgModule({
    declarations: [
        ClientDetailComponent,
        ClientListComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        ReactiveFormsModule,
        ClientRoutingModule,
    ], providers: [
        ClientsService
    ]
})
export class ClientModule {
}
