import React from 'react';
import {getHeaders} from './utils.js'

class Story extends React.Component {  

    constructor(props) {
        super(props);
        // console.log('Passed into Post.js by Post:', this.props.model)
        this.state = {
            model: this.props.model
        }

    }
    
    render () {
        const story = this.state.model;
        if (!story) {
            return (
                <div></div>  
            );
        }
        return (
            <div className="story">
                <div className="story-img-wrapper">
                    <img src={story.user.thumb_url} alt={"story icon for " + story.user.username}></img>
                </div>
                <a href="#" className="story-username">{story.user.username}</a>
            </div>
        );     
    }
}

// export post class
export default Story;
