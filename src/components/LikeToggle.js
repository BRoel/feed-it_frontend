import React from "react";

class LikeToggle extends React.Component {
    
    state = {
        likes: 0,
        // toggle: false
    };

    numberOfLikes = () => {
        if (this.state.likes === 0)
            this.setState({ likes: 1 })
        else 
            this.setState({ likes: 0 })
    }

    render() {
        return (
            <div className='like-container'>
                
                <div className='like-text'>
                    <p>{this.state.likes} people have liked this post</p>
                </div>
                
                <div className='like-button'>
                    <img  src='images/thumbs-up.svg' onClick={this.numberOfLikes} alt=''/>
                </div>
               
            </div>
        );
    }
    
}

export default LikeToggle