import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './layouts/home-component/home-component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: 'client', loadChildren: () =>
            import("./features/client/client.module").then(x => x.ClientModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}