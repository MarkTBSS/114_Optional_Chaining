"use strict";

// Sample restaurant object
const restaurant = {
    openingHours: {
        mon: { open: 9, close: 22 },
        tue: { open: 9, close: 22 },
        wed: { open: 9, close: 22 },
        thu: { open: 9, close: 22 },
        fri: { open: 9, close: 22 },
        sat: { open: 10, close: 23 },
        sun: { open: 10, close: 23 },
    },
    order: function (start, end) {
        return `Order from ${start} to ${end}`;
    },
    orderRisotto: function (start, end) {
        return `Order Risotto from ${start} to ${end}`;
    }
};

// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? "closed";
    console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// const users = [];

console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");
