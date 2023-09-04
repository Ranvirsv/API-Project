import express, { Request, Response } from "express";
import { createClient } from "redis";
import { configDotenv } from "dotenv";

configDotenv();

const getData = express.Router();
const uri: string = process.env["DB_URL"]!;
const password: string = process.env["PASSWORD"]!;

const client = createClient({
  password: password,
  socket: {
    host: uri,
    port: 15170,
  },
});

getData.get("/api", async (_req: Request, res: Response) => {
  res.status(200).json({ message: "you got it!" });
  client.connect().then((res) => console.log(res));
});

export { getData };
