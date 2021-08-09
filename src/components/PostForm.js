import React from 'react'
import {connect} from 'react-redux'
import {addPost} from '../actions/addPost'


class PostForm extends React.Component {

    state = {
        title: '',
        image: '',
        body: ''
    }
    //local state
    

    handleChange = (e) => { //update state

        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    handleSubmit = (e) => { //on form submit state sent to addPost action
        e.preventDefault()
        this.props.addPost(this.state)
        this.setState({
            title: '',
            image: '', //clears form after submit
            body: ''
        })
        this.props.history.push('/posts')
    }

    render() {
        return(
            <div>
                <form className='post' onSubmit={this.handleSubmit}>
                    <label>Post Title:<strong className='require'> required*</strong></label>
                    <input type='text' placeholder='Title' value={this.state.title} name="title" onChange={this.handleChange} required/>
                    <br></br>
                    <label>Post Photo URL:</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
                    <br></br>
                    <label>Post Content:<strong className='require'> required*</strong></label>
                    <textarea type='text' placeholder='Content' value={this.state.body} name="body" onChange={this.handleChange} required/>
                    <button className='button' type="submit">Submit Post</button>
                </form>
            </div>
        )
    }

}


export default connect(null, {addPost})(PostForm) //allows for a call to this.props.addPost