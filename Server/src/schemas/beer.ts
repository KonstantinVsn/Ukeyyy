import { Schema, Model, model} from "mongoose";
import {IBeer} from "../interfaces/beer";

export var beerSchema: Schema = new Schema({
  createdAt: Date,
  email: String,
  firstName: String,
  lastName: String
});
  
export const User: Model<IBeer> = model<IBeer>("User", beerSchema);