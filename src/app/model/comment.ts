import { IUser } from "./iuser";

export interface Comment {
    id:string;
    description: string;
    propiety: IUser;
    rate: number;
}
