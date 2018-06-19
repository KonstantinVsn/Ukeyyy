import { Document } from "mongoose";

export interface IClient extends Document {
    name?: string,
    id?: string,
    secret?: string,
    userId?:string
    fullName(): string;
}