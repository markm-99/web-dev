// this is an individual component called 'Hello' and the code it creates
import React from 'react';
import './Hello.css';

// class is a function
const Hello = (props) => {
    return (
        // JSX: virtual DOM - 
        // tachyons --> tc = text center
        // f1 =  header 1 (big font)
        // f3 = header 3 (smaller font)

        // JS syntax: className, html: class 
        <div className='f1 tc'>
            <h1>Hello World</h1>
            <p>{props.greeting}</p>
        </div>
    );
}
export default Hello;