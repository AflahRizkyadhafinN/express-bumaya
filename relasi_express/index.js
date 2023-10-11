import express from "express";
import cors from "cors";
import FileUpload from "express-fileupload";
import {
  deleteComputer,
  deleteDepartment,
  deleteProject,
  deleteUser,
  getComputer,
  getDepartment,
  getProject,
  getUser,
  postComputer,
  postDepartment,
  postProject,
  postUser,
} from "./mainController.js";

const app = express();

app.use(FileUpload());
app.use(cors());
app.use(express.json());

app.get("/user", getUser);
app.post("/user", postUser);
app.delete("/user/:id", deleteUser);
app.get("/computer", getComputer);
app.post("/computer", postComputer);
app.delete("/computer/:id", deleteComputer);
app.get("/department", getDepartment);
app.post("/department", postDepartment);
app.delete("/department/:id", deleteDepartment);
app.get("/project", getProject);
app.post("/project", postProject);
app.delete("/project/:id", deleteProject);

app.listen(5000, () => console.log("Server running on port 5001"));
