import React, { Component } from 'react'
import ".././css/header.css"
import HeaderBody from './HeaderBody';

export class Header extends Component {

    constructor(){
        super();
        this.state ={
            formData : {
                name : "abhijit",
                age : 14 ,
            },
            count : 0,
            any : null
        }
    }
    handleClick = ()=>{
        this.setState({formData : {
            ...this.state.formData,
            name : "Rajesh"
        } })
        
    }
    handleClick2 = ()=>{
        var temp = {
            ...this.state.formData,
            age:20
        }


        this.setState({
            formData  : temp
        })
    }
    handleCount = () =>{
        this.setState({
            count : this.state.count +1
        })
    }
    handleCount2 = (para) =>{
        this.setState({
            count : this.state.count -1
        })
    }
    setterFunc=(any)=>{
        this.setState({
            any  : any
        })
    }
    render() {
        var home = true
        
        return (
            <React.Fragment>
                <ul className="header">
                    <li className="nav-links" >Other ...</li>
                    <li className="nav-links" >About</li>
                    <li className="nav-links" >Contact</li>
                    <li className="nav-links" > Home </li>
                </ul>
               <HeaderBody 
               formData = {this.state.formData } 
               handleClick2 = {this.handleClick2} 
               handleClick={this.handleClick}  
               count={this.state.count} 
               handleCount ={this.handleCount}
               handleCount2 ={this.handleCount2}
               setterFunc = {this.setterFunc}
               />
            </React.Fragment>
        )
    }
}
