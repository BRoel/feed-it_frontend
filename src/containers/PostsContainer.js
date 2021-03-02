import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/fetchPosts';
import Posts from '../components/Posts';
import PostForm from '../components/PostForm';
import Post from '../components/Post';
import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts() //on mount fetching posts from backend
    }
    
    render() {
        return (
            <div>
                <NavBar/>
                <header className="App-header">
                    <Switch>
                        <Route path='/posts/new' component={PostForm}/>
                        <Route path='/posts/:id' render={(routerProps) => <Post {...routerProps} posts={this.props.posts}/>}/>
                        <Route path='/posts' render={(routerProps) => <Posts {...routerProps} posts={this.props.posts}/>}/>
                    </Switch>
                </header>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      posts: state.posts // posts can be accessed as props
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostsContainer) 
//mapStateToProps to get access to posts in store as props and send them to posts component
//passed fetchPosts to update Redux store