const router = require("express").Router();
const usersRoutes = require("./users.routes");

router.get("/", (req, res) => {
  res.render("home");
});

router.use("/users", usersRoutes);

module.exports = router;