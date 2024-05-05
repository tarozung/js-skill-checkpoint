// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity += 100;
inventory.orange = {price: 20, quantity: 300};
console.log(inventory);

let totalValue = 0;
for (let item in inventory) {
    totalValue += inventory[item].price * inventory[item].quantity 
}

console.log("Total inventory value: " + totalValue + " baht")