import React from 'react';
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'

class CommentForm extends React.Component {

    state = {
        content: ''
    }
    //local initial state
    
    handleChange = (e) => { //update state
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => { //on form submit state sent to addComment action
        e.preventDefault()
        this.props.addComment(this.state, this.props.post.id) //dispatch to reducer
        this.setState({
            content: '' //clears form after submit
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Comment: </label>
                    <textarea type='text' name='content' value={this.state.content} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}


export default connect(null, {addComment})(CommentForm) //on invoke update store. connecting to addComment