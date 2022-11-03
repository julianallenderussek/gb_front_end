import axios from 'axios';
import React, { Component } from 'react'
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';
import uuid from "react-uuid"

class UserList extends Component {
  constructor(props) {
    super(props);
    this.getUsers = this.getUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  
  state = {
    users: []
  }
    
  addUser = (name) => {
    const newUser = {
      id: uuid(),
      name: name 
    }
    let users = this.state.users
    users.push(newUser)
    this.setState({
      users: users
    })
  }

  deleteUser = (id) => {
    console.log(this.state.users);
    console.log(id);
    let users = this.state.users.filter((user) => {
      return user.id !== id
    })
    
    this.setState({
      users: users
    })
  }
  
  getUsers = () => {
      console.log(this.props);
      axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const users = res.data;
            console.log(users);
            this.setState({...this.state, users});
          })
    };

    componentDidMount() {
      this.getUsers()    
    }
    
  render() {
      return (
          <ul>
          <AddStudent getUsers={this.getUsers} addUser={this.addUser} />
          {
            this.state.users
              .map(user =>
                <div style={{display: "flex"}}>
                  <li style={{marginLeft: "10px"}} key={user.id}>{user.name}</li>
                  <DeleteStudent id={user.id} deleteUser={this.deleteUser} />
                </div>
              )
          }
        </ul>
      )
  }
}

export default UserList;