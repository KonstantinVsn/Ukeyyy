import { Schema, Model, model} from "mongoose";
import {IToken} from "../interfaces/token";

export var tokenSchema: Schema = new Schema({
  value: String,
  userId: String,
  clientId: String
});
  
export const User: Model<IToken> = model<IToken>("User", tokenSchema);