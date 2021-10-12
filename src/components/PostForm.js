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

    getInitialState(){
        return(
            { 
                title: '',
                image: '',
                body: '',
            }
        );
    }


    // useEffect(() => {
    //     const getUserMetadata = async () => {
    //       const domain = "salute-vets.us.auth0.com";
      
    //       try {
    //         const accessToken = await getAccessTokenSilently({
    //           audience: `https://${domain}/api/v2/`,
    //           scope: "read:current_user",
    //         });
      
    //         const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
      
    //         const metadataResponse = await fetch(userDetailsByIdUrl, {
    //           headers: {
    //             Authorization: `Bearer ${accessToken}`,
    //           },
    //         });
      
    //         const { user_metadata } = await metadataResponse.json();
      
    //         setUserMetadata(user_metadata);
    //       } catch (e) {
    //         console.log(e.message);
    //       }
    //     };
      
    //     getUserMetadata();
    //   }, [getAccessTokenSilently, user?.sub]);

    // handleChange = (e) => { //update state

    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
        
    // }

    componentDidMount() {

    }

    

    handleSubmit = (e) => { //on form submit state sent to addPost action
        e.preventDefault()
        const { user, isAuthenticated, getAccessTokenSilently } = this.props.auth0;
        // in order to get access token I must call getAccessTokenSilently.
        // also the example I sent is using react hooks so I cannot do it the way shown unless I switch this to a functional component setup.  The hook setup is commented out above.
        // may need to conver to a componentDidMount setup so on mount I can assess if they are authenticated and grab their access token.

        const postWithUser = Object.assign({}, this.state)
        postWithUser.user_id = user.sub
        postWithUser.nickname = user.nickname
        this.props.addPost(postWithUser)

        this.setState(this.getInitialState())
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

export default connect(null, {addPost})(withAuth0(PostForm)) //allows for a call to this.props.addPost