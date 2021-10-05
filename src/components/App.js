import React, {Component} from 'react'

import CardList from './CardList'
import {robots} from './RobotList'

import SearchRobot from './SearchRobot'




class   App extends Component {
    constructor(){
        super()
        this.state={
            robots: robots,
            searchField:''
        }

    }


    searchChange =(event)=>{
            this.setState({searchField:event.target.value})

            //console.log(filterRobot);
    }


render(){
    const filterRobot=robots.filter(robot=>{
        return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
    });
    return ( 
        <div>
            
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchRobot  searchChange={this.searchChange} />
            </div>
            
            <CardList robots={filterRobot}/>
         
        </div>
      
         );
    } 
}

export default App;
