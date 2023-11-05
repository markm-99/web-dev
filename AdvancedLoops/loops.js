// For loop
const basket = ['apples', 'oranges', 'grapes'];
const detailed_basket = 
{
    apples: 5,
    oranges: 10, 
    grapes: 7
}

basket = 
{
    0: 'apples',
    1: 'oranges',
    2: 'grapes'
}

for(let i =0; i<=basket.length; i++)
{
    console.log(basket[i]);
}

// forEach loop
basket.forEach(item => {
    console.log(item);
})

// for of - cleaner syntax
// iterating - arrays, strings
// can't use detailed_basket here since that is not iterable (dictionary not iterable)
for (item of basket)
{
    console.log(item);
}

// for in - loops over enumerable properties
// enumerable: you can see the properties of the objects
for (item in detailed_basket)
{
    console.log(item);
}