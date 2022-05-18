import React, { Component } from 'react'
 

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
      }

  render() {
    return (
      <div> 
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <ClassComponent favcol="yellow"/>
      </div>
    )
  }
}
