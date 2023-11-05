// reference type
let object1 = { value: 20}
// undefined
let object2 = object1;
// undefined
let object3 = { value: 20 }
// undefined
// object1 == object2
// true
// object1 == object3
// false
// object1 === object2
// true
// object1 === object3
// false

// context vs scope
const object4 = {
    a: function()
    {
        console.log(this);
    }
}
// scope: function lives inside its own universe - won't affect the outer objects
// context: where we are along the object
// this: window object in JS

// instantiation - allows us to make multiple objects without re-creating them
class Player
{
    // everytime I make a player, constructor will create properties on player object
    constructor(name, type)
    {
        // this is the created object below the constructor
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce()
    {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
    play()
    {
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}

// anytime you extend parent class, need super() to extend properties
class Wizard extends Player
{
    constructor(name, type)
    {
        // extends the Player class' name and type, can't access 'this' without it
        // runs the parent class constructor function (Player)
        super(name, type)
        console.log('wizard', this);
    }
}

// create new wizard objects
const wizard1 = new Wizard('Mark', 'Healer');
const wizard2 = new Wizard('Shawn', 'Healer');