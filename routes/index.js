const { Event } = require("../models/event");
const express = require("express");
const router = express.Router();



//Delete Event
router.delete("/api/event/delete/:id", (req, res) => {
  Event.findByIdAndDelete(
    req.params.id,
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "Event deleted successfully",
          deleteEvent: data,
        });
      } else {
        console.log(err);
      }
    }
  );
});
//Get single Event
router.get("/api/event/getsingleevent/:id", (req, res) => {
  Event.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});



//Get all events
router.get("/api/event/getall", (req, res) => {
  Event.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

//Add Event
router.post("/api/event/add", (req, res, next) => {
  console.log(req)
  Event.create(req.body)
    .then(
      (event) => {
        console.log("Event has been Added ", event);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(event);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});





//Edit Event
router.put("/api/event/edit/:id", (req, res) => {
  // const vis = {
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password,
  // };
  Event.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "Event updated successfully",
          updateEvent: data,
        });
      } else {
        console.log(err);
      }
    }
  );
});


module.exports = router;
