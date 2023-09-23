let name = "mithun";
let email = "mithun.s@pw.live";
let age = "21";

if (typeof name !== "string") {
  console.log(`name should be string`);  
}
else if(typeof email !== "string"){
console.log(`email should be string`);
}
else if(typeof age !== "string"){
console.log(`email should be number`);
}
else {
console.log(`plz fill all the field`);
}