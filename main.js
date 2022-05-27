import {ambiLightTv, soldOut, sortByPrice, tvTypes} from "./opdracht1.js";
import {
  createPurchasedTvs,
  createSoldTvs,
  createAmountOfStock,
  totalSumOfSoldTvs,
  totalSumOfPurchasedTvs
} from "./opdracht2.js";
import {inventory} from "./inventory.js";
import {createTableOfTvBrands, createTableOfTvObjects} from "./opdracht3.js";

//Opdracht 1

console.log("Opdracht 1a:");
console.log(tvTypes);

console.log("Opdracht 1b:");
console.log(soldOut);

console.log("Opdracht 1c:");
console.log(ambiLightTv);

console.log("Opdracht 1d:");
console.log(sortByPrice);

//Opdracht 2
console.log("Opdracht 2a");
console.log(totalSumOfSoldTvs());

console.log("Opdracht 2b");
console.log("<-- Antwoord in html");
createSoldTvs();

console.log("Opdracht 2c");
console.log(totalSumOfPurchasedTvs());

console.log("Opdracht 2d");
console.log("<-- Antwoord in html");
createPurchasedTvs();

console.log("Opdracht 2e");
console.log("<-- Antwoord in html");
createAmountOfStock();

//Opdracht 3
console.log("Opdracht 3a");
console.log("<-- Antwoord in html");
createTableOfTvBrands();

console.log("Opdracht 3b");
console.log("<-- Antwoord in html");
createTableOfTvObjects(inventory, "tv merken");

