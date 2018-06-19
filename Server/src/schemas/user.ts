import { Schema, Model, model} from "mongoose";
import {IUser} from "../interfaces/user";

export var userSchema: Schema = new Schema({
  createdAt: Date,
  email: String,
  firstName: String,
  lastName: String
});
  
export const User: Model<IUser> = model<IUser>("User", userSchema);