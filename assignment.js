"use strict";

// 10.1
function getFirstKeyword(book) {
    return book.keywords?.[0];
}

// Example usage
const book = {
    title: "Introduction to Computer Science",
    keywords: ["computer science", "programming", "algorithms"]
};

console.log(getFirstKeyword(book)); // Expected output: "computer science"