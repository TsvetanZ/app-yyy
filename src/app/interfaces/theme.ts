import { IUser } from "./user";

export interface ITheme {
    themeName: string;
    subscribers: string[];
    userId:IUser;
    posts: string [];
    created_at: string;
    _id: string;
    updatedAt: string;
}