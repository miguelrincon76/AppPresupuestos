let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Material Model
let materialSchema = require("../models/materiales.model");

// CREATE Material
router.route("/create-material").post((req, res, next) => {
  materialSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Materials
router.route("/").get((req, res) => {
  materialSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single Material
router.route("/edit-material/:id").get((req, res) => {
  materialSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Material
router.route("/update-material/:id").put((req, res, next) => {
  materialSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Material updated successfully !");
      }
    }
  );
});

// Delete material
router.route("/delete-material/:id").delete((req, res, next) => {
  materialSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
