import React from "react";

class LikeToggle extends React.Component {
    
    state = {
        likes: 0,
    };

    addLike = () => {
        let newLikes = this.state.likes =+ 1;

        this.setState({
          likes: newLikes
        })
    };

    render() {
        return <button onClick={this.addLike}> Like {this.state.likes}</button>
    }
    
}

export default LikeToggle