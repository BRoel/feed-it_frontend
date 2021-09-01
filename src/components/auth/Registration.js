import React from 'react';
import axios from 'axios';
// import {connect} from 'react-redux'
// import {addUser} from '../../actions/addUser'

export default class Registration extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            registrationErrors: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        console.log('form submitted');
        axios
            .post("http://localhost:3000/registrations",
            {
            user: {
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
            }
        }, 
        { withCredentials: true }
        )
        .then(response => {
            if (response.data.status === "created") {
              this.props.handleSuccessfulAuth(response.data);
            }
          })
        .catch(error => {
            console.log("registration error", error);
        })
        e.preventDefault();
        this.setState({
            email: '',
            password: '',
            password_confirmation: '',
            registrationErrors: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Email' 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required
                    />
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password' 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required
                    />
                    <input 
                        type='password' 
                        name='password_confirmation' 
                        placeholder='Password confirmation' 
                        value={this.state.password_confirmation} 
                        onChange={this.handleChange} 
                        required
                    />
                    <button type='submit'>Register</button>
                </form>
            </div>
        );
    }
}

// export default connect(null, {addUser})(Registration)