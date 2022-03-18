import React from 'react';
import {getHeaders} from './utils.js';

class LikeButton extends React.Component {  

    constructor(props) {
        super(props);

        // like button needs
        // 1. whether onot the current post is liked (likeId)
        // 2. which post to like / unlike(postId)

        // bind methods under constructor to allow them to access this
        // this refers to class and now method names
        this.likeUnlike = this.likeUnlike.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
    }
    
    likeUnlike (ev) {
        // console.log('Toggle Like');
        if(this.props.likeId) {
            this.unlike();
        } else {
            this.like();
        }
    }

    like () {
        // console.log('Like')
        const postId = this.props.postId;
        fetch('https://photo-app-secured.herokuapp.com/api/posts/' + postId + '/likes/', {
            headers: getHeaders(),
            body: JSON.stringify({}),
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // call parent Component's function
            this.props.requeryPost();
        })
    }

    unlike () {
        // console.log('unlike')
        const postId = this.props.postId;
        const likeId = this.props.likeId
        fetch('https://photo-app-secured.herokuapp.com/api/posts/' + postId + '/likes/' + likeId, {
            headers: getHeaders(),
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // call parent Component's function
            this.props.requeryPost();
        })
    }

    render () {
        const likeId = this.props.likeId;
        return (
            <button 
                role="switch"
                onClick={ this.likeUnlike }
                aria-checked={ likeId ? true: false }
                aria-label={"like button for " + this.props.postId}>
                <i className={ likeId ? 'fas fa-heart': 'far fa-heart'}></i>
            </button>
        )
    }
}

// export post class
export default LikeButton;
