import React, { Component } from 'react'
import axios from 'axios';

export default class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.getUsers = props.getUsers
    this.addUser = props.addUser
  }
  
  state = {
      name: ""
  }

    handleSubmit = async  (e) => { 
      e.preventDefault()
      const input = document.getElementById("name-input");
      const name = input.value;
      await axios.post(`https://jsonplaceholder.typicode.com/users`, {
        name: name,
      })
        .then(function (response) {
          console.log(response);
          console.log(this);
          
        })
        .catch(function (error) {
          console.log(error);
        }).then(() => {
          this.addUser(name);
        })
    }

    render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>
                Person Name:
                <input id="name-input" type="text" name="name" onChange={this.handleChange}/>
            </label>
            <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}
