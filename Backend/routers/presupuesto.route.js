let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// presupuesto Model
let presupuestoSchema = require("../models/presupuestos.model");

// CREATE presupuesto
router.route("/create-presupuesto").post((req, res, next) => {
  presupuestoSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ presupuestos
router.route("/").get((req, res) => {
  presupuestoSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single presupuesto
router.route("/edit-presupuesto/:id").get((req, res) => {
  presupuestoSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update presupuesto
router.route("/update-presupuesto/:id").put((req, res, next) => {
  presupuestoSchema.findByIdAndUpdate(
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
        console.log("Presupuesto updated successfully !");
      }
    }
  );
});

// Delete presupuesto
router.route("/delete-presupuesto/:id").delete((req, res, next) => {
  presupuestoSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
