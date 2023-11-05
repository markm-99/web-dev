var a = 5;
var b = a;

b++;
let obj = {a: 'a', b: 'b', c: {
    deep: 'try and copy me'
}
};

let clone = Object.assign({}, obj)
let clone2 = {...obj}
// turn everything into a string, parse it back to an object
let superClone = JSON.parse(JSON.stringify())
obj.c.deep = 'hahaha';
console.log(obj) 
console.log(clone2) 
console.log(superClone) 

// -----------------
console.log(a) //5
console.log(b) //6

// Objects stored in memory and pass by reference, does not make a separate copy
let obj1 = {name: 'Yao', password: '123'} // use same object for obj2
let obj2 = obj1;

obj2.password = "easypeasy"
console.log(obj1)
console.log(obj2)

var c = [1,2,3,4,5]
var d = [].concat(c);
d.push(1234567) // will add this number to c's array [1,2,3,4,5,1234567]

console.log(d)
console.log(c)
