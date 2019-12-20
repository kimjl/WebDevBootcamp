//https://developer.mozilla.org/en-US/docs/Web/Events
//Run the bottom in browser console to find out the number of events
//Should get 433 as of 12/20/2019

var tables = document.querySelectorAll('table').length;
var tr = document.querySelectorAll('tr').length;

console.log(tr);
console.log(tables);