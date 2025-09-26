import {Injectable} from "@angular/core";
import * as bulmaToast from 'bulma-toast'

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    public constructor() {
    }

    public showDefaultError(): void {
        const errorMessage: string = "Falha ao processar solicitação";
        bulmaToast.toast({message: errorMessage, type: 'is-danger'});
    }

    public showSuccess(message: string): void {
        bulmaToast.toast({message: message, type: 'is-success'});
    }
}