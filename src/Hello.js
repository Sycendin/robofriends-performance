import React from 'react';
// import ReactDOM from 'react-dom';
import './Hello.css'
// extends React.Component
// npm install  tachyons
// this is basically a function that is being rendered v
class  Hello extends React.Component {
    render(){
        // wrap return in brackets for multople linkes
        // f1 and tc from tachyons
        return (
            // use className instead of class (jsx)
            // this object has properties that is greeting {this.props.greeting}
        <div className='f1 tc'>
            <h1>Hello World</h1>
            <p>{this.props.greeting}</p>
        </div>
        
        
        );


    }
}

export default Hello;