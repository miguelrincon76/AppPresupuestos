let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// apu Model
let apuSchema = require("../models/apus.model");

// CREATE apu
router.route("/create-apu").post((req, res, next) => {
  apuSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ apu
router.route("/").get((req, res) => {
  apuSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single apu
router.route("/edit-apu/:id").get((req, res) => {
  apuSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update apu
router.route("/update-apu/:id").put((req, res, next) => {
  apuSchema.findByIdAndUpdate(
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
        console.log("Apu updated successfully !");
      }
    }
  );
});

// Delete apu
router.route("/delete-apu/:id").delete((req, res, next) => {
  apuSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
