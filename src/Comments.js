import React from 'react';
import {getHeaders} from './utils.js'
import Comment from './Comment.js'
import CommentButton from './CommentButton.js'

class Comments extends React.Component {  

    constructor(props) {
        super(props);
        // console.log('Passed into Post.js by Post:', this.props.model)

        // to implement comments I need
        // the post itself
        this.state = {
            model: this.props.post
        }
    }

    render () {
        const post = this.state.model;
        return (
            <div className="comment-container">
                <div className="likes">
                    <p>{post.likes.length} likes</p>
                </div>
                <div className="comments">
                    <p><span className='comment-user'>{post.user.username}</span> {post.caption}...
                    <a className='caption-expand' href="#">expand comment</a></p>
                    <Comment post={post}/>
                </div>
                <div className="time">
                    <p>{post.display_time}</p>
                </div>
                <CommentButton 
                    post={post}
                    requeryPost={this.props.requeryPost}/>
            </div>
        );     
    }
}

// export post class
export default Comments;
