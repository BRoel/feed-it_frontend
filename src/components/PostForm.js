import React from 'react'
import {connect} from 'react-redux'
import {addPost} from '../actions/addPost'
import {getId} from '../helpers/authHelpers'
import { withAuth0 } from '@auth0/auth0-react';

class PostForm extends React.Component {
    constructor() {
        super()
        this.state = this.getInitialState()
    }

    componentDidMount() {
        const { getAccessTokenSilently } = this.props.auth0;
        getAccessTokenSilently().then((value) => this.setState({token: value}))
    }

    getInitialState(){
        return(
            { 
                title: '',
                image: '',
                body: '',
                photo: ''
            }
        );
    }

    handleChange = (e) => { //update state
        if (e.target.name === 'photo') {
            this.setState({
                [e.target.name]: e.target.files[0]
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = (e) => { //on form submit state sent to addPost action
        e.preventDefault()
        const { user, isAuthenticated, getAccessTokenSilently } = this.props.auth0;
        // in order to get access token I must call getAccessTokenSilently.
        // also the example I sent is using react hooks so I cannot do it the way shown unless I switch this to a functional component setup.
        // may need to convert to a componentDidMount setup so on mount I can assess if they are authenticated and grab their access token.

        const postWithUser = Object.assign({}, this.state)
        postWithUser.user_id = user.sub
        postWithUser.nickname = user.nickname
        // let token = await getAccessTokenSilently();
        this.props.addPost(postWithUser, this.state.token)

        this.setState(this.getInitialState())
        this.props.history.push('/posts')
    }

    render() {

        if(!this.state.token) {
            return <div> </div>
        }
        return(
            <div>
                <form className='post' onSubmit={this.handleSubmit}>
                    <label>Post Title:<strong className='require'> required*</strong></label>
                    <input type='text' placeholder='Title' value={this.state.title} name="title" onChange={this.handleChange} required/>
                    <br></br>
                    <label>Post Photo URL:</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
                    <input type="file" name="photo" value={this.state.photo} onChange={this.handleChange} />
                    <br></br>
                    <label>Post Content:<strong className='require'> required*</strong></label>
                    <textarea type='text' placeholder='Content' value={this.state.body} name="body" onChange={this.handleChange} required/>
                    <button className='button' type="submit">Submit Post</button>
                </form>
            </div>
        )
    }

}

export default connect(null, {addPost})(withAuth0(PostForm)) //allows for a call to this.props.addPost