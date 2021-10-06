import React from 'react'
import Card from './Card'


function CardList({robots}) {

    const robotsArray=robots.map((user,i) =>{
        return <Card  key={i} user={user}/>
    });

    return(robotsArray)
 



    
}

export default CardList;