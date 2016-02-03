// Create variables for the welcome message.

var greeting = "Hello ";
var name = "Rachel";
var message = " , please check your order:";

// Concatenate the three variables above to create the welcome message.

var welcome = greeting + name + message;

// Create variables to hold details about the sign

var sign = "Chocolate House";
var tiles = sign.length;
var subtotal = tiles * 5;
var shipping = 7;
var grandTotal = subtotal + shipping;

// Get element that has an id of greeting.

var el = document.getElementById('greeting');

// Replace the content of that element with the personalized welcome message.

el.textContent = welcome;

// Get the element that has an id of userSign then update its contents.

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of tiles then update its contents.

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subtotal then update its contents.

var elSubtotal = document.getElementById('subtotal');
elSubtotal.textContent = "$" + subtotal;

// Get the element that has an id of shipping then update its contents.

var elShipping = document.getElementById('shipping');
elShipping.textContent = "$" + shipping;

// Get the element that has an id of grandTotal then update its contents.

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = "$" + grandTotal;