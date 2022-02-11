import { render } from "@testing-library/react";
import React, { Component, Fragment } from "react";
import CardList from "../components/CardList";
// import { robots } from "./robots";
import SearchBox from '../components/SearchBox'
import './RoboApp.css'
import Scroll from '../components/Scroll.js'
import ErrorBoundry from "../components/ErrorBoundry";
//redux
import { connect } from 'react-redux'
import { requestRobots, setSearchField } from "../action";
//376 tell me what state i need to listen to and send it down as props
const mapStateToProps = state =>{
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
// 376 tell me what props i should listen to that are actions that need to 
// be dispatched
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        //378 
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class RoboApp extends Component {

     //233
     // after mounting set robots to robots.json
     // construnctor -> render -> componentDidMount -> render
     componentDidMount(){
        this.props.onRequestRobots()
     }
    //  value of this is not refering to app on  onSearchChange
    //   event, but the input so it does not have state.robot
    //    so use arrow functions to make it refer to the app

    //  onSearchChange = (event)=>{
    //      // set state to searchfield
    //      this.setState({searchfield: event.target.value})
    //     // console.log(event.target.value);

     
    //  }

     render(){
         const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
            
        })
// const RoboApp = () => {
    return isPending ?
      <h1>Loading</h1>
 :
    
 (
        
        <Fragment>
        <h1 className="f1 ">RoboFriends </h1>
        <SearchBox searchChange={onSearchChange}/>
        {/* <CardList robots={robots}/> */}
        {/* 230 */}
        <Scroll>
            <ErrorBoundry>
            <CardList robots={filteredRobots}/>
            </ErrorBoundry>
        </Scroll>
        
        </Fragment>

    )
}
 }

//376
// connect is ah higer order function -> returns another function
export default connect(mapStateToProps, mapDispatchToProps)(RoboApp);