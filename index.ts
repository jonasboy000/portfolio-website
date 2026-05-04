import express from "express";
import path from "path";
import projects from "./public/js/projects.json";

const app = express();
const PORT = process.env.PORT || 3000;
const year = new Date().getFullYear();

const viewsPath = path.join(
  __dirname,
  process.env.NODE_ENV === "production" ? "../views" : "views",
);
const publicPath = path.join(
  __dirname,
  process.env.NODE_ENV === "production" ? "../public" : "public",
);

app.set("views", viewsPath);
app.use(express.static(publicPath));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

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
