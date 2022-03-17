import React from 'react';
import LikeButton from './LikeButton.js';
import {getHeaders} from './utils.js';
import BookmarkButton from './BookmarkButton.js';
import Comments from './Comments.js';
import AddComment from './CommentButton.js';

class Post extends React.Component {  

    constructor(props) {
        super(props);
        // console.log('Passed into Post.js by Post:', this.props.model)
        this.state = {
            model: this.props.model
        }
        // keyword this will permanently refer to instance
        this.requeryPost = this.requeryPost.bind(this);
    }
    
    requeryPost() {
        // get a post with an updated data structure from the Server
        // i.e. new comment, like, or bookmark
        fetch('/api/posts/' + this.props.model.id, {
            headers: getHeaders(),
        })
        .then(response => response.json())
        .then(data => {
            // console.log('Updated post:', data);
            // after we retrieve the data, we need to redraw the component.
            this.setState({ 
                model: data
            })
        })
    }

    render () {
        const post = this.state.model;
        if (!post) {
            return (
                <div></div>  
            );
        }
        return (
            <section className="card">
                <div className="header">
                    <h3>{ post.user.username }</h3>
                    <i className="fa fa-dots"></i>
                </div>
                
                <img 
                    src={ post.image_url } 
                    alt={'Image posted by ' +  post.user.username } 
                    width="300" 
                    height="300" />
                
                <div className="info">
                    <div>
                        <LikeButton 
                            likeId={post.current_user_like_id}
                            postId={post.id} 
                            requeryPost={this.requeryPost}/>
                        
                        <BookmarkButton 
                            bookmarkId={post.current_user_bookmark_id}
                            postId={post.id} 
                            requeryPost={this.requeryPost}/>
                    </div>
                </div>
                <Comments 
                    post={post}
                    requeryPost={this.requeryPost}/>
                <AddComment 
                    postId={post.id} 
                    requeryPost={this.requeryPost}/>
            </section> 
        );     
    }
}

// export post class
export default Post;
