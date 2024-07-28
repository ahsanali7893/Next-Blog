import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:R9FZDidkbQo9zNan@cluster0.winjfuz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("DB connect");
};
