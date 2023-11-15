import express from "express";
import myDB from "../db/myMongoDB.js";

let router = express.Router();

/* GET home page. */
router.get("/api/photos", async function (req, res) {
  try {
    const photos = await myDB.getPhotos();
    res.status(200).json({ photos });
  } catch (err) {
    return res.status(404).send({ error: err });
  }
});

export default router;
