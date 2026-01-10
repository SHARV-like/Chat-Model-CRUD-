const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
    .then(() => {
        console.log("connection successful");
    }).catch((err) => {
        console.log(err);
    })

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

let allChats = [
  {
    from: "Rohit",
    to: "Ananya",
    msg: "Are you coming to college today?",
    created_at: new Date()
  },
  {
    from: "Ananya",
    to: "Rohit",
    msg: "Yes, I will be there by 10.",
    created_at: new Date()
  },
  {
    from: "Kunal",
    to: "Priya",
    msg: "Project deadline is tomorrow.",
    created_at: new Date()
  },
  {
    from: "Priya",
    to: "Kunal",
    msg: "I know, finishing it tonight.",
    created_at: new Date()
  },
  {
    from: "Sahil",
    to: "Neha",
    msg: "Movie plan this weekend?",
    created_at: new Date()
  },
  {
    from: "Neha",
    to: "Sahil",
    msg: "Sure! Saturday evening works.",
    created_at: new Date()
  },
  {
    from: "Aarav",
    to: "Isha",
    msg: "Can you share your notes?",
    created_at: new Date()
  },
  {
    from: "Isha",
    to: "Aarav",
    msg: "Yes, I will send them soon.",
    created_at: new Date()
  },
  {
    from: "Vikas",
    to: "Mehul",
    msg: "Meeting postponed to tomorrow.",
    created_at: new Date()
  },
  {
    from: "Mehul",
    to: "Vikas",
    msg: "Okay, thanks for informing.",
    created_at: new Date()
  }
]

Chat.insertMany(allChats);