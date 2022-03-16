import React from 'react';
import LikeButton from './LikeButton.js'
import {getHeaders} from './utils.js'
import BookmarkButton from './BookmarkButton';

class Comments extends React.Component {  

    constructor(props) {
        super(props);
        // console.log('Passed into Post.js by Post:', this.props.model)
        this.state = {
            model: this.props.model
        }
        // keyword this will permanently refer to instance
    }

    render () {
        const post = this.state.model;
        if (!post) {
            return (
                <div></div>  
            );
        }
        return (<div></div>);     
    }
}

// export post class
export default Comments;
