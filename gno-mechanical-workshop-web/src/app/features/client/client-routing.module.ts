import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ClientDetailComponent} from "./components/client-detail/client-detail.component";
import {ClientListComponent} from "./components/client-list/client-list.component";

const routes: Routes = [
    {
        path: '',
        component: ClientListComponent
    },
    {
        path: 'edit/:id',
        component: ClientDetailComponent
    },
    {
        path: 'create',
        component: ClientDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {
}

