// Product.js
export class Product {
    #price; // zapouzdřená vlastnost

    constructor(name, price, tags = []) {
        this.name = name;
        this.#price = price >= 0 ? price : 0;
        this.tags = tags;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        if (newPrice < 0) {
            console.warn("Cena nemůže být záporná. Nastavuji 0.");
            this.#price = 0;
        } else {
            this.#price = newPrice;
        }
    }

    getInfo() {
        return `Produkt: ${this.name}, cena: ${this.#price} Kč, tagy: ${this.tags.join(", ")}`;
    }

    addTag(tag) {
        this.tags.push(tag);
    }

    applyDiscount(percent) {
        const discount = this.#price * (percent / 100);
        return Math.round((this.#price - discount) * 100) / 100;
    }
}

