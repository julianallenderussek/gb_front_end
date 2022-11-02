import React, { Component } from 'react'
import axios from 'axios';

export default class AddStudent extends Component {
    state = {
        id: this.props.id 
    }
    
    handleSubmit = (e) => { 
        e.preventDefault()
        console.log(this.state.id )
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {

    return (
      <div style={{marginLeft: "10px"}}>
        <form onSubmit={this.handleSubmit}>
            <button type='submit'>Delete</button>
        </form>
      </div>
    )
  }
}
