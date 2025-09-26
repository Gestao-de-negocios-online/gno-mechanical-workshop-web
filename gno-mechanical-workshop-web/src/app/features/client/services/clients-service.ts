import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/client";

@Injectable({
    providedIn: 'root'
})
export class ClientsService {
    apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl + "client";
    }

    save(client: Client): Observable<Client> {
        return this.http.post<Client>(this.apiUrl, client)
    }

    update(client: Client): Observable<Client> {
        return this.http.patch<Client>(this.apiUrl, client);
    }

    getAll(): Observable<Array<Client>> {
        return this.http.get<Array<Client>>(this.apiUrl);
    }

    getById(id: number): Observable<Client> {
        return this.http.get<Client>(this.apiUrl + '/' + id);
    }
}
