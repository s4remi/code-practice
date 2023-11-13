import express from "express";
import myDB from "../db/myMongoDB.js";

let router = express.Router();

/* GET home page. */
router.get("/api/photos", async function (req, res) {
  const photos = await myDB.getPhotos();
  res.json(photos);
});

export default router;
