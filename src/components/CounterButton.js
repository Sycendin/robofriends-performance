import React, {Component} from "react";

class CounterButton extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState)
        if (this.state.count !== nextState.count){
            return true
        }
        return false;
    }
    updatecount = () =>{
        this.setState(state => {
            return {count: this.state.count + 1}
    })
    }
    render (){
        return  (<button color={this.props.color} onClick={this.updatecount}>count: {this.state.count}</button>)
    }
}

export default CounterButton;