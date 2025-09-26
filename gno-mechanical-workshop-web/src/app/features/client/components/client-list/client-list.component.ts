import {Component, inject, OnInit} from '@angular/core';
import {ClientsService} from "../../services/clients-service";
import {Client} from "../../models/client";
import {Router} from "@angular/router";

@Component({
    selector: 'app-client-list',
    standalone: false,
    templateUrl: './client-list.component.html',
    styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit {

    public clients: Array<Client>;
    private clientService = inject(ClientsService);
    private router = inject(Router);

    constructor() {
        this.clients = new Array<Client>();
    }

    ngOnInit(): void {
        this.loadClients();
    }

    public clientDetail(clientId: number): void {
        if (clientId == 0) {
            this.router.navigate(['/client/create']);
            return;
        }

        this.router.navigate(['/client/edit', clientId]);
    }

    private loadClients(): void {
        this.clientService.getAll()
            .subscribe({
                    next: (clients: Client[]) => {
                        this.clients = clients as Array<Client>;
                    },
                    error: err => {
                        console.log(err.message);
                    }
                }
            )
    }
}
