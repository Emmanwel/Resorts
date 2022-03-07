const Room = require("../models/room");
const mongoose = require("mongoose");

const rooms = require("../data/rooms");

//mongoose.connect("mongodb://localhost:27017/resorts", {
mongoose.connect(
  "mongodb+srv://mahjong:@Well123@rooms.3btis.mongodb.net/Rooms?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All Rooms are added.");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
