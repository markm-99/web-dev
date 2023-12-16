// map
let name  = ["Pedro", "Maria", "João", "Pedro"];
name.map((name) => {
    return <h1> {name}</h1> 
});

name.filter((name) => {
    return name != "Pedro";
});

console.log(name)
// assume you want to alter each name individually
// filter


// reduce