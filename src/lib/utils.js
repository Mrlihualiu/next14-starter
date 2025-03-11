const mongoose = require('mongoose');

const contection = {}
const DB_URL = 'mongodb+srv://chenxi:liu19921105@cluster0.ijw1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


export const connectionToDb = async () => {
  try {
    if (contection.isConnected) {
      console.log("Already connected to database");
      return;
    }
    const connectUrl = process.env.MONGO || DB_URL
    console.log('mongoose :>> ', mongoose);
    const db = await mongoose.connect(connectUrl);
    console.log('db :>> ', db);
    contection.isConnected = db.connections[0].readyState;
    console.log('database connected!');
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
