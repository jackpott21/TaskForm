const morgan = require("morgan");

import express from "express";
import exphbs from "express-handlebars";
import indexRouter from "./routes/index.routes";
import path from "path";
import { create } from "express-handlebars";
const app = express();

app.set("views", path.join(__dirname, "/views"));

var hbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
  //   defaultPartials:'navbar'
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use(indexRouter);
//static files
app.use(express.static(path.join(__dirname,'public')));

export default app;
