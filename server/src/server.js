const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");

const app = express();

// mongo
const user = "root";
const pas = "example";
const host = "mongo";
const port = 27017;

const mongoUrl = `mongodb://${user}:${pas}@${host}:${port}`;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log("Error connecting to mongoDB", err);
  }
};

connectToMongo();

// redis
const redisPort = 6379;
const redisHost = "redis";

const client = redis.createClient({
  url: `redis://${redisHost}:${redisPort}`,
});
client.on("error", (err) => console.log("Redis Client Error...", err));
client.on("connect", () => console.log("Redis Client connected@@@@"));
client.connect();

// routes
app.get("/", (req, res) => {
  client.set("hello", "ssssss...");
  res.send("Hello qq");
  console.log("Hello qq!");
});

app.get("/hello", async (req, res) => {
  const result = await client.get("hello");
  res.send(result);
  console.log("Hello ress!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
