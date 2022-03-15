import React from 'react';
import {getHeaders} from './utils'
import Post from './Post.js'

class Posts extends React.Component {
    constructor(props) {
        super(props);
        // console.log('Posts component created');
        // fetch posts
        
        this.state = { 
            posts: []
        }
        this.getPosts();
    }

    getPosts() {
        fetch('/api/posts', { 
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            // set state to data -> trigger redraw when state is updated
            this.setState({ 
                posts: data
            })
            // console.log(data)
        })

    }
    render () {
        // console.log('Post is rendering...', this.state)
        return (
            <div id="posts">
                {
                    this.state.posts.map(post => {
                        return <Post model={post} key={'post-' + post.id} />
                    })
                }
            </div>
        );
    }
}

// export post class
export default Posts;
