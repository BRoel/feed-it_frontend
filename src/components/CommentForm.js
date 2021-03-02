import React from 'react';
import {connect} from 'react-redux'

class CommentForm extends React.Component {

    state = {
        content: ''
    }
    //local state
    
    handleChange = (e) => { //update state
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => { //on form submit state sent to addComment action
        e.preventDefault()
        this.props.addPost(this.state) //dispatch to reducer
        this.setState({
            title: '', //clears form after submit
            body: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Comment: </label>
                    <textarea type='text' name='content' value={this.state.content} onChange={this.handleChange}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }

}


export default connect(null)(CommentForm)