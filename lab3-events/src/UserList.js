import axios from 'axios';
import React, { Component } from 'react'
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.getUsers = this.getUsers.bind(this);
    }
  
    state = {
        users: []
    }
    
    getUsers = () => {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const users = res.data;
            console.log(users.length);
            this.setState({ users });
          })
    };

    componentDidMount() {
      this.getUsers()    
    }
    
    render() {
    return (
        <ul>
        <AddStudent onClick={this.getUsers}/>
        {
          this.state.users
            .map(user =>
              <div style={{display: "flex"}}>
                <li style={{marginLeft: "10px"}} key={user.id}>{user.name}</li>
                <DeleteStudent id={user.id}/>
              </div>
            )
        }
      </ul>
    )
  }
}

export default UserList;