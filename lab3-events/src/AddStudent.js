import React, { Component } from 'react'
import axios from 'axios';

export default class AddStudent extends Component {
  
    handleSubmit = (e) => { 
        e.preventDefault()
        axios.post(`https://jsonplaceholder.typicode.com/users`, {
            name: 'Fred',
          })
          .then(function (response) {
            console.log(response);
            this.props.onClick();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>
                Person Name:
                <input type="text" name="name" onChange={this.handleChange}/>
            </label>
            <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}
