import React from 'react'
function Card({user}) {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw-3 shadow-5'>
            <img  alt="robotes" src={`https://robohash.org/ ${user.id}?200*200`}/>
            <h3>Name: {user.name}</h3>
            <h4>Email id: {user.email}</h4>
       </div>
    );
    
    
}

export default Card;