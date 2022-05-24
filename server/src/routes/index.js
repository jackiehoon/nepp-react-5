import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("test test asdfasdf");
});

export default router;
