import { Document } from "mongoose";

export interface IToken extends Document {
    value?: string;
    userId?: string;
    clientId?: string;
}