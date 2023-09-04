import express, { Request, Response } from "express";

const getData = express.Router();

getData.get("/api", async (_req: Request, res: Response) => {
  res.status(200).json({ message: "you got it!" });
});

export { getData };
