// models/schema/ticket.js
// 지시사항을 참고하여 코드를 완성하세요.
const { Schema } = require("mongoose");

const TicketSchema = new Schema({
  airline: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = TicketSchema;




// models/index.js
// 지시사항을 참고하여 코드를 완성하세요.
const mongoose = require("mongoose");
const TicketSchema = require("./schemas/ticket");

exports.Ticket = mongoose.model("Ticket", TicketSchema);
