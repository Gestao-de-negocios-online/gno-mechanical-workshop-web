import {Address} from "./address";

export class Client {

    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    email: string;
    phone: string;
    secondaryPhone: string;
    address: Address;

    constructor() {
        this.id = 0;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.name = "";
        this.email = "";
        this.phone = "";
        this.secondaryPhone = "";
    }
}