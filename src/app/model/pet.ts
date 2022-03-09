export interface Pet {
    petId:string;
    idUser:string;
    nombre:string;
    photo:string;
    tipo:string;
    raza:string;
    sexo:string;
    fechaNacimiento:string;
    enfermedad:boolean;
    vacunas:boolean;
    chip:boolean;
    descripcion:string;
    cuidados:string;
    edit?:boolean;
}
