import { Document } from "mongoose";

export interface ICode extends Document {
    value?: string;
    redirectUri?: string;
    userId?: string;
    clientId: string;
}