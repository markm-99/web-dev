import React from 'react';
import Card from './Card';
const CardList = ({robots}) => {
return (
    <div>
        {
            /* loop over robots with map and make card component per robot */
            robots.map((user, i) => {
    return ( 
        <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[0].email} 
            />
        );
    })
        }
    </div>
  );
}

export default CardList;