import React from 'react'

import CardList from './CardList'
import {robots} from './RobotList'


function  App(params) {

    return (  <CardList robots={robots}/>);
    
}

export default App;
