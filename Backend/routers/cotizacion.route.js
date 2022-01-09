let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// cotizacion Model
let cotizacionSchema = require("../models/cotizaciones.model");

// CREATE cotizacion
router.route("/create-cotizacion").post((req, res, next) => {
  cotizacionSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ cotizaciones
router.route("/").get((req, res) => {
  cotizacionSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single cotizacion
router.route("/edit-cotizacion/:id").get((req, res) => {
  cotizacionSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update cotizacion
router.route("/update-cotizacion/:id").put((req, res, next) => {
  cotizacionSchema.findByIdAndUpdate(
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
        console.log("Cotizacion updated successfully !");
      }
    }
  );
});

// Delete cotizacion
router.route("/delete-cotizacion/:id").delete((req, res, next) => {
  cotizacionSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
