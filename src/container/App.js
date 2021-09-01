import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import ErrorBoundary from '../component/ErrorBoundary'
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robotsInfo: [],
            Searchfield: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({ robotsInfo: users }))
    }

    onSearchChange = (event) => {
        this.setState({ Searchfield: event.target.value })
    }

    render() {
        const { robotsInfo , Searchfield } = this.state;
        const filteredRobots = robotsInfo.filter(robot => {
            return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
        })
        return !robotsInfo.length ?
        <h1 className="tc f1"><span>Loading...</span></h1> :
        (
            <div className="tc">
                <h1 className="f1"><span>RobotFriends</span></h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robotsInfo={ filteredRobots }/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
          
}

export default App;