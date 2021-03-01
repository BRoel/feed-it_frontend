import React from 'react'
import {connect} from 'react-redux'
import {addPost} from '../actions/addPost'

class PostForm extends React.Component {

    state = {
        title: '',
        body: ''
    }
    //local state

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPost(this.state)
        this.setState({
            title: '',
            body: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Post Title: </label>
                    <input type='text' placeholder='Title' value={this.state.title} name="title" onChange={this.handleChange}/>
                    <br></br>
                    <label>Post Content: </label>
                    <input type='text' placeholder='Content' value={this.state.body} name="body" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}


export default connect(null, {addPost})(PostForm)