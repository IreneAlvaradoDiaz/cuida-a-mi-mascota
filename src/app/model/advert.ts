import { Comment } from "./comment";
import { IUser } from "./iuser";

export interface Advert {
    id: string;
    idUser: string;
    tipe:string;
    nameUser: IUser;
    photo?:string;
    title:string;
    description:string;
    rate?: number;
    comment?: Comment;    
    create_At: Date;
    price: number;
    location: string;
}
