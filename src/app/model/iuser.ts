export interface IUser {
    userId:string;
    photo?:string;
    nombre:string;
    apellidos:string;
    sexo:string;
    email:string;
    fechaNacimiento:string;
    pass?:string;
    telefono:number;
    type: string;
    edit?:boolean;
}
