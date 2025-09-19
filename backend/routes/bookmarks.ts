import { Router, Request, Response } from "express";
import { mockBookMarks } from "../data/mockData";

const router = Router();

// GET all bookmarks
router.get("/", (req: Request, res: Response) => {
  res.json(mockBookMarks);
});

export default router;
