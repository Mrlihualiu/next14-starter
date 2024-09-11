import mongoose from "mongoose"

const contection = {}
const dbUrl = 'mongodb+srv://chenxi:liu19921105@cluster0.ijw1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


export const connectionToDb = async () => {
  try {
    if (contection.isConnected) {
      console.log("Already connected to database");
      return;
    }
    const connectUrl = process.env.MONGO || dbUrl
    const db = await mongoose.connect(connectUrl);
    contection.isConnected = db.connections[0].readyState;
    console.log('database connected!');
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
