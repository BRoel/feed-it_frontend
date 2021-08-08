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
        return <button onClick={this.numberOfLikes}> Like {this.state.likes}</button>
    }
    
}

export default LikeToggle