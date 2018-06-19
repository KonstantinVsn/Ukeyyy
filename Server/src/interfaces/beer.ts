import { Document } from "mongoose";

export interface IBeer extends Document {
    value?: string;
    redirectUri?: string;
    userId?: string;
    clientId: string;
}