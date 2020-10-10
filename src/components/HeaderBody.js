import React, { Component } from 'react';
import FunctionalComp from './FunctionalComp';

export default class HeaderBody extends Component {
  render() {
    return (
     <React.Fragment>
          Name  : {this.props.formData.name}
                <br />
                Age  : {this.props.formData.age}
        <form action="">

            <button onClick={()=>{this.props.handleClick()}} type="button">
                Click to change name
            </button>
            <button onClick={()=>{
                this.props.handleClick2();
                this.props.setterFunc("seted from another component")

            }} type="button">
                Click to change age
            </button>
            <h1> {this.props.count}  </h1>
            <button onClick={()=>{this.props.handleCount()}} type="button">
                Click to count + 1
            </button>
            <button onClick={()=>{this.props.handleCount2()}} type="button">
                Click to count - 1
            </button>
        </form>
        {/* <FunctionalComp /> */}
     </React.Fragment>
    );
  }
}
