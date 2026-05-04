import express from "express";
import path from "path";
import projects from "./public/js/projects.json";

const app = express();
const PORT = process.env.PORT || 3000;
const year = new Date().getFullYear();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.render("pages/home", { title: "Home", year });
});

app.get("/projects", (req, res) => {
  res.render("pages/projects", { title: "Projects", year, projects });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "Contact", year });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});