const express = require('express')
const dotenv = require('dotenv')
const MongoClient = require("mongodb").MongoClient;
let cors = require('cors')
const routesUrls = require('./routes/routes')
const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)


const mongoClient = new MongoClient("mongodb://localhost:27017/tasks", { useUnifiedTopology: true });
mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    db = client;
    app.locals.collection = client.db("my-task-kpp").collection("my-task-kpp");
    app.listen(4001, function(){
        console.log("Сервер ожидает подключения...");
    });
});