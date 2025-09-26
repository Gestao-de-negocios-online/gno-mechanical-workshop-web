import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientsService} from "../../services/clients-service";
import {Client} from "../../models/client";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Address} from "../../models/address";
import {ToastService} from "../../../../core/services/toast-service";

@Component({
    selector: 'app-client-detail',
    standalone: false,
    templateUrl: './client-detail.component.html',
    styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent implements OnInit {

    public clientId: number;
    public client: Client;
    public clientForm: FormGroup;
    private clientService = inject(ClientsService);
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private formBuilder = inject(FormBuilder);
    private toastService = inject(ToastService);

    constructor() {
        this.clientId = 0;
        this.client = new Client();
    }

    ngOnInit() {
        this.createForm();
        this.getRouteParams();
    }

    public submitForm(): void {
        this.client = this.clientForm.value as Client;
        this.client.address = this.clientForm.value.address as Address;

        if (this.client.id > 0) {
            this.update();
        } else {
            this.save();
        }
    }

    private update(): void {

        this.clientService.update(this.client).subscribe({
            next: client => {
                this.toastService.showSuccess("Cliente atualizado com sucesso!");
                this.router.navigate(['client']);
            },
            error: () => {
                this.toastService.showDefaultError();
            }
        })
    }

    private save(): void {

        this.clientService.save(this.client).subscribe({
            next: client => {
                this.toastService.showSuccess("Cliente salvo com sucesso!");
                this.router.navigate(['client']);
            },
            error: () => {
                this.toastService.showDefaultError();
            }
        })
    }

    private getRouteParams() {
        const routeParams: number = Number(this.route.snapshot.paramMap.get('id'));

        if (routeParams > 0) {
            this.getClientById(Number(routeParams));
        }
    }

    private getClientById(id: number) {
        this.clientService.getById(id)
            .subscribe({
                next: client => {
                    this.client = client;
                    this.fillForm(this.client);
                },
                error: err => {
                    console.log(err);
                }
            })
    }

    private createForm(): void {
        this.clientForm = this.formBuilder.group({
            id: [0],
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required]],
            secondaryPhone: [''],
            address: this.formBuilder.group({
                id: [0],
                street: ['', [Validators.required]],
                number: ['', [Validators.required]],
                neighborhood: ['', [Validators.required]],
                complement: [''],
                city: ['', [Validators.required]],
                state: ['', [Validators.required]],
            })
        })
    }

    private fillForm(client: Client): void {
        this.clientForm.patchValue({
            id: client.id,
            name: client.name,
            email: client.email,
            phone: client.phone,
            secondaryPhone: client.secondaryPhone,
            address: {
                id: client.address.id,
                street: client.address.street,
                number: client.address.number,
                neighborhood: client.address.neighborhood,
                complement: client.address.complement,
                city: client.address.city,
                state: client.address.state
            }
        })
    }
}
