import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {provideHttpClient} from "@angular/common/http";
import {ToastService} from "./services/toast-service";

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        provideHttpClient(),
        ToastService],
    exports: []
})
export class CoreModule {
}
