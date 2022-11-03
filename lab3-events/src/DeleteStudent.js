import React, { Component } from 'react'
import axios from 'axios';

export default class DeleteStudent extends Component {
  
    handleSubmit = async (e) => { 
        // axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   })
      this.props.deleteUser(this.props.id)
    }

  render() {
    console.log(this.props.id);
    return (
      <div style={{marginLeft: "10px"}}>
        <button onClick={this.handleSubmit}>Delete</button>
      </div>
    )
  }
}
