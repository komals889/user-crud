 import React, { Component } from 'react'
import ComponentDidUpdate from './ComponentDidUpdate';
import ComponentWillMount from './ComponentWillMount';
import ShouldComponentUpdate from './ShouldComponentUpdate';
 
 export default class componentDidMount extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
   render() {
     return (
       <div>
           <h1>My Favorite Color is {this.state.favoritecolor}</h1>
           <ShouldComponentUpdate/>
           <ComponentDidUpdate/>
           <ComponentWillMount/>
       </div>
     )
   }
 }
 