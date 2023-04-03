const express = require("express");
const router = express.Router();
const employeesController = require("../../controllers/employeesController");

router
  .route("/")
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployees)
  .put(employeesController.updateNewEmployees)
  .delete(employeesController.deleteNewEmployees);

router.route("/:id").get(employeesController.getEmployee);

module.exports = router;
