import React, {Component} from "react";
import CounterButton from "./CounterButton";

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState){
        // Never update this component
        return false;
    }
    render (){
        return (<div>
            <CounterButton color ={'red'}/>
        <h1 className="f1 ">RoboFriends </h1>
        </div>
         );
    }
}

export default Header;