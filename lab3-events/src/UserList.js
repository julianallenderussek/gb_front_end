import axios from 'axios';
import React, { Component } from 'react'
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.getUsers = this.getUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  
    state = {
      users: [],
      counter: 10
    }
    
  addUser = (name) => {
    const newUser = {
      id: this.state.counter + 1,
      name: name 
    }
    let users = this.state.users
    users.push(newUser)
    this.setState({
      users: users,
      counter: this.counter + 1
    })
  }

  deleteUser = (id) => {
    console.log(this.state.users);
    console.log(id);
    let users = this.state.users.filter((user) => {
      return user.id !== id
    })
    console.log(users);
    this.setState({
      users: users,
      counter: this.state.counter + 1
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
                  <DeleteStudent id={user.id} getUsers={this.getUsers} deleteUser={this.deleteUser} />
                </div>
              )
          }
        </ul>
      )
  }
}

export default UserList;