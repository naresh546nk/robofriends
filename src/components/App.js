import React, {Component} from 'react'

import CardList from './CardList'

import SearchRobot from './SearchRobot'

import  ErrorBoundary from './ErrorBoundary'

import './App.css'




class   App extends Component {
    constructor(){
        super()
        this.state={
            robots: [],
            searchField:''
        }

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {return  res.json()})
        .then(user =>this.setState({robots:user}))
    }
    

    searchChange =(event)=>{
            this.setState({searchField:event.target.value})

            //console.log(filterRobot);
    }


render(){
    const filterRobot=this.state.robots.filter(robot=>{
        return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
    });

    if(this.state.robots.length===0){
        return <div className="loader"></div>

         
    }
    return ( 
        <div>
            
            <div className="tc">
                <h1 > <div className="shadow">ℝ𝕆𝔹𝕆𝔽ℝ𝕀𝔼ℕ𝔻𝕊</div></h1>
                <SearchRobot  searchChange={this.searchChange} />
            </div>
            
            <ErrorBoundary>
            <CardList robots={filterRobot}/>

            </ErrorBoundary>
               
            
         
        </div>
      
         );
    } 
}

export default App;
