import { Schema, Model, model} from "mongoose";
import {IClient} from "../interfaces/client";

// Define our client schema
export var clientSchema = new Schema({
  name: String,
  id: String,
  secret: String,
  userId:String
});

export const Client: Model<IClient> = model<IClient>("Client", clientSchema);