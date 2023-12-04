/** @format */

import { Schema, model, models } from "mongoose";

export interface IUser {
  _id: string;
  email: string;
  username: string;
  password?: string;
  userTag: string;
  image: string;
  favorites: string[];
}

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
    match: [
      /^(?=.{8,25}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, must contain 8-20 alphanumeric charactes and be unique",
    ],
  },
  image: {
    type: String,
  },
  userTag: {
    type: String,
    required: [true, "User tag is required"],
    unique: [true, "User tag already exists"],
    match: [
      /^(?=.{3,35}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, must contain 8-20 alphanumeric charactes and be unique",
    ],
  },
  favorites: {
    type: Array<String>,
    default: new Array(),
  },
  password: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);
export default User;
