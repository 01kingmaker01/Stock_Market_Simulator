import { Document, Model, model, models, Schema } from "mongoose";

export interface IUser {
  username: string;
  name: string;
  email: string;
  password: string;
}

interface IUserDocument extends IUser, Document {}

interface IUserModel extends Model<IUserDocument> {
  buildUser(args: IUser): IUserDocument;
}

const userSchema: Schema<IUserDocument> = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // date: Date.now()
});

userSchema.statics.buildUser = (args: IUser) => {
  return new User(args);
};

const User =
  (models.User as Model<IUserModel>) ||
  model<IUserDocument, IUserModel>("User", userSchema);

export default User;
