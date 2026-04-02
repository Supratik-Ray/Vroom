import mongoose from "mongoose";

export async function connectToDb(url: string) {
  try {
    await mongoose.connect(url);
    console.log("Successfully connected to DB");
  } catch (error) {
    console.error("Error connection to DB: ", error);
    process.exit(1);
  }
}
