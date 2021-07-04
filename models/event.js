const mongoose = require("mongoose");

//Event Schema

const Event = mongoose.model("Event", {
  name: {
    type: String,
  },
  timespan: {
    type: String,
  },
  description: {
    type: String,
  },
 
});


module.exports={Event};