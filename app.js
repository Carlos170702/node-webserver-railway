import express from "express";
import hbs from "hbs";
import variableEntorno from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
variableEntorno.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// handelbars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "carlos daniel",
    titulo: "Curso de node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "carlos daniel",
    titulo: "Curso de node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "carlos daniel",
    titulo: "Curso de node",
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("corriendo en el puerto,", process.env.PORT);
});
