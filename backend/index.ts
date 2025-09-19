import express from "express";
import bookmarksRouter from "./routes/bookmarks";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/bookmarks", bookmarksRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
