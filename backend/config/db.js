import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected successfully ${res.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default dbConnect;
