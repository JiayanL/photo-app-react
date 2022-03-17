import React from 'react';
import {getHeaders} from './utils.js'


class Post extends React.Component {  

    constructor(props) {
        super(props);
        // console.log('Passed into Post.js by Post:', this.props.model)
        this.state = {
            post: this.props.post
        }
    }

    render () {
        const comments = this.state.post.comments;
        const html = [];

        if (comments.length > 1) {
            html.push(
                <div className="view_more" key={"view more for " + this.state.post.id}>
                    <button type="button">View all {comments.length} comments</button>
                </div>
            )
        }   

        if (comments.length > 0 ) {
            html.push(
                <p key={"comment for " + this.state.post.id}>
                    <span className='comment-user'>{comments[comments.length - 1].user.username} </span> 
                    {comments[comments.length - 1].text}
                </p>
            )
        } 
        return (
            <div>{html}</div>
        );
    }
}

// export post class
export default Post;
