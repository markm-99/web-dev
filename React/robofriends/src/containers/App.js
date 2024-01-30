// This is the parent where every component will live
// Each component is going to be listed here with an 'import' and it gets declared with an uppercase name (e.g: <Cardlist/>)
import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from '../robots';
import './App.css';

// STATE -> props
class App extends Component {
    // objects have state: smart components
    // Add state with a constructor
    constructor()
    {
        // gives us parent attributes
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount()
    {
        // fetch(): tool to make requests to servers - gives us list of users
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>
            // updates with robot users from the url
            this.setState({robots: users})
        );
    }
    // change the results as I type to filter them out in the searchbox
    onSearchChange = (event) => {
        // setting state so searchField equals value we enter
        this.setState({ searchField: event.target.value})
        // this. is not referring to App
        // since event occurs in the input tag inside SearchBox.js, this. is the input
        // However, input doesn't have state.robots 
        
    }

    render() {
        // allows user to filter displayed robots based on text entered in search
        // filter(): makes new array containing only elements where function is True
        // this.state.robots: array of robot objects
        const filteredRobots = this.state.robots.filter(robots => {
            // return name of robot whose state is found in searchField
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        }
        else
        {

    return (
        <div className='tc'>
        <h1 className='f2'> Mark's Robot Contacts </h1> 
        {/* let's app know there's a change */}
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList robots = {filteredRobots} /> 
        </Scroll>
        </div>
    );
    }
}
}
// State: object that describes the app - allows searchbar to dynamically change with state of the robots app
// Props: comes out of state
export default App;