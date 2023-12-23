// https://youtu.be/WfCJ3sHnLBM?si=p__g_o0bJBNzzBqu&t=1309 -> api creation

// al routes for USER API

const router = require("express").Router();
const { checkToken } = require("http://127.0.0.1:5500//core/api/authentication/token_validation.js");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("./user.controller");
router.get("/", checkToken, getUsers);
router.post("/", checkToken, createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;
