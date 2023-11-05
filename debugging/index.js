// const flattened = [[0,1], [2,3], [4,5]].reduce((a,b) => a.concat(b), []);
// const flattened = [[0,1], [2,3], [4,5]].reduce((a,b) => a.concat(b), []);
const flattened = [[0,1], [2,3], [4,5]].reduce((accumulator, array) => 
{
    debugger;
    // console.log('array', array);
    // console.log('accumulator', accumulator);
    return [].concat([0,1]);
    // pass in accumulated values into the empty array
}, []);
// reduce

// memory
const a = 1;
const b = 1;
const c = 1;

// Asynchronous programming
console.log('1')
setTimeout(() =>
{
    console.log('2');
}, 2000)
    console.log('3');

// call stack
setTimeout(), 2000
// web api

// callback queue

// event loop

// asynchronous:

// call stack
const one = () =>
{
    const two = () => 
    {
        console.log('4');
    }
}

// stack overfloew

// Recursion: function that calls itself w/o an end
function foo()
{
    foo()
}

foo()