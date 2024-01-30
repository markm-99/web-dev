import React from 'react';

export const Card = ({ name, email, id }) => {
  return (
    // tachyons syntax for nice cards
    <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
          <p>{email}</p>
        {/* <h2> Jane Doe</h2>
          <p>jane.doe@gmail.com</p> */}
      </div>
    </div>
  )
}

export default Card;