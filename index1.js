let totalvalue = 2000;
let discountpercentage = 50;
// let discountedprice =  totalvalue - totalvalue * 0.20;
let discountedprice = totalvalue - (discountpercentage / 100) * totalvalue
console.log("after discount is: Rs."+ discountedprice);