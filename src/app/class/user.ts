import { IUser } from "../model/iuser";

export class User implements IUser {
    id?: number;
    photo: string;
    nombre: string;
    apellidos: string;
    sexo: string;
    edad: number;
    telefono: number;
    email: string;
    password: number;
}
