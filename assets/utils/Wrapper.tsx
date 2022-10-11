import mongoose from "mongoose";

const connectMongo = async () =>
  await mongoose
    .connect(process.env.NEXT_PUBLIC_MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .finally(() => {
      console.log("Tried to connect");
    });
const disconnectMongo = async () =>
  await mongoose
    .disconnect()
    .then(() => console.log("Disconnected from MongoDB"));

const Wrapper = async (props: Function) => {
  try {
    await connectMongo();
    await props();
    await disconnectMongo();
  } catch (error) {
    console.error(error?.message);
  }
};
export default Wrapper;
