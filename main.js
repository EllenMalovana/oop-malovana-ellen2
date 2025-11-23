// main.js
import { Product } from './Product.js';

const phone = new Product("Telefon Ultra X5", 9999, ["electronics", "phone"]);
const laptop = new Product("Notebook Z-Pro 14", 19999, ["electronics"]);

phone.addTag("new");
const discounted = phone.applyDiscount(20);

console.log("=== Produkt 1 ===");
console.log(phone.getInfo());
console.log("Cena po slevě 20%:", discounted);

console.log("=== Produkt 2 ===");
console.log(laptop.getInfo());

laptop.price = -500; // otestuje setter
console.log("Opravená cena laptopu:", laptop.price);

