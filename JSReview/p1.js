const name = "Pedro";
const age = 20;

const person = {
    name: Pedro,
    age: 20,
    isMarried: false,
};

// keep everything from person and add a new property (name)
const person2 = {...person, name: "Maria"}

const names = ["Pedro", "Maria", "João"];
const names2 = [...names, "Joel"];
// used for props - a lot!
// const {name, age, isMarried} = person;