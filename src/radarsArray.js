import { v4 as uuidv4 } from "uuid";

const radarsArray = [
  {
    driverName: "Robert Dawney Jr.",
    carModel: "GMC",
    carNumber: "RDJ 0718",
    forWhat: "High Speed Limit",
    value: 250,
    id: uuidv4(),
  },
  {
    driverName: "David Adkins",
    carModel: "Chevrolet",
    carNumber: "Ad 8080",
    forWhat: "Child safe",
    value: 550,
    id: uuidv4(),
  },
  {
    driverName: "Dominic Toretto",
    carModel: "Skylander",
    carNumber: "TT 0159",
    forWhat: "Crashed car",
    value: 70,
    id: uuidv4(),
  },
  {
    driverName: "Will Smith",
    carModel: "Ferrari",
    carNumber: "WS 0011",
    forWhat: "No number",
    value: 50,
    id: uuidv4(),
  },
  {
    driverName: "Jonhson Lee",
    carModel: "Dodge Challenger",
    carNumber: "DD 0999",
    forWhat: "Incurance failure",
    value: 420,
    id: uuidv4(),
  },
];

export default radarsArray;
