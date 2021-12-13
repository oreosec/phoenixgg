import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        user: '',
        password: ''
    }
    handleSubmit = event => {
        event.preventDefault();
        const users = {
            user: this.state.user,
            password: this.state.password
        }
        
        axios.post('http://localhost:8000/api/login', { users }, {
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(e => {
            console.log(e);
        })
        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(users),
        //     mode: 'no-cors'
        // };
        // fetch("http://127.0.0.1:8000/api/login", options)
        // .then(res => {
        //     console.log(res)
        //     console.log(res.data);
        // })
        // .catch(e => {
        //     console.log(e);
        // })
    }
    handleChange = event => {
        this.setState({ user: event.target.value, password: event.target.value });
    }
    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <label> Username:
                    <input type='text' name='user' onChange={this.handleChange}/>
                </label>
                <label> Password:
                    <input type='password' name='password' onChange={this.handleChange}/>
                </label>
                <input type='submit' value='submit'/>
            </form>
        )
    }
}

export default Login;
