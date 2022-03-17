import React from 'react';
import Comment from './Comment.js'

class Comments extends React.Component {  

    constructor(props) {
        super(props);
        // console.log('Passed into Post.js by Post:', this.props.model)

        // to implement comments I need
        // the post itself
    }

    render () {
        const post = this.props.post;
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
            </div>
        );     
    }
}

// export post class
export default Comments;
