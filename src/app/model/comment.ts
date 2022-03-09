import { Advert } from "./advert";
import { IUser } from "./iuser";

export interface Comment {
    id:string;
    description: string;
    propiety?: IUser;
    idAdvert: string;
    idUser: string;
    rate: number;
}
