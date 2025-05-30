require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");
const port = process.env.PORT || 5000;

require("./config/db");

const errorMiddleware = require("./middlewares/error");

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
    },
  })
);

const user = require("./routes/userRoute");
const blog = require("./routes/blogRoute");
const contact = require("./routes/contactRoute");

app.use("/api/v1", user);
app.use("/api/v1/blog", blog);
app.use("/api/v1/contact", contact);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
