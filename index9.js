const arr = [1, 2, 999, 56, "banty", 1234, "pw"];
for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] === "string") {
       console.log(`find the first string of an array:${arr[index]}`);
       break; 
    }
}