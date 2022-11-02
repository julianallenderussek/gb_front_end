import React, { Component } from 'react'
import axios from 'axios';

export default class DeleteStudent extends Component {
    constructor(props) {
      super(props)
      this.deleteUser = props.deleteUser
    }

    state = {
        id: this.props.id 
    }
  
    handleSubmit = async (e) => { 
        e.preventDefault()
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          }).then(() => {
            console.log(this.state.id);
            this.deleteUser(this.state.id);
          })
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
