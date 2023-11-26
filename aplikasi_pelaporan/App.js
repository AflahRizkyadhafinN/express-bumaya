import express from "express";
import router from "./routes.js";
import cors from "cors";
import FileUpload from "express-fileupload";

const app = express();
const port = 5000;

app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
