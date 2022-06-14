const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const dbConnect = require("./config/db/dbConnect");
const userRoutes = require("./route/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const postRoute = require("./route/posts/postRoute");
const commentRoutes = require("./route/comments/commentRoute");
const emailMsgRoute = require("./route/emailMsg/emailMsgRoute");
const categoryRoute = require("./route/category/categoryRoute");

const app = express();
//DB
dbConnect();

const upate = () => {};

app.get("/", (req, res) => {
  res.json({ msg: "API for blog Application..." });
});
//Middleware
app.use(express.json());
//cors
app.use(cors());
//Users route
app.use("/api/users", userRoutes);
//Post route
app.use("/api/posts", postRoute);
//comment routes
app.use("/api/comments", commentRoutes);
//email msg
app.use("/api/email", emailMsgRoute);
//category route
app.use("/api/category", categoryRoute);
//err handler
app.use(notFound);
app.use(errorHandler);

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running ${PORT}`));

//
