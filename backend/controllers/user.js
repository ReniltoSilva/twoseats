const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (req, res) => {
  const response = await User.find({});

  res.json(response);
});

module.exports = usersRouter;
