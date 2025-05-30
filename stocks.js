const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  Exchange: { type: String, required: true },
  InstrumentIdentifier: { type: String, required: true },
  BuyPrice: { type: Number, required: true },
  Close: { type: Number, required: true },
  High: { type: Number, required: true },
  Low: { type: Number, required: true },
  LastTradePrice: { type: Number, required: true },
  Open: { type: Number, required: true },
  QuotationLot: { type: Number, required: true },
  SellPrice: { type: Number, required: true },
  BuyQty: { type: Number, required: true },
  SellQty: { type: Number, required: true },
  ltp_up: { type: Boolean, default: false },
  name: { type: String, required: true },
  volume: { type: Number, default: 0 },
  expiry: { type: Date, required: true },
  strike_price: { type: String, default: "0.00" },
  option_type: { type: String, default: "" },
  volume_up: { type: Boolean, default: false },
  product: { type: String, required: true },
  OpenInterest: { type: Number, default: 0 },
  TotalQtyTraded: { type: Number, default: 0 },
  Value: { type: Number, default: 0 },
  PreOpen: { type: Boolean, default: false },
  PriceChange: { type: Number, default: 0 },
  PriceChangePercentage: { type: Number, default: 0 },
  OpenInterestChange: { type: Number, default: 0 },
  MessageType: { type: String, required: true },
  LastTradeTime: { type: Number, default: 0 },
  ServerTime: { type: Number, default: 0 },
});

module.exports = mongoose.model("Stock", stockSchema);