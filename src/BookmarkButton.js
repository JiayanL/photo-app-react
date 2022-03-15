import React from 'react';
import {getHeaders} from './utils.js';

class BookmarkButton extends React.Component {  

    constructor(props) {
        super(props);

        // book mark needs
        // 1. whether or not post is bookmarked (bookmarkId)
        // 2. which post to bookmark / unbookmark 

        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.unbookmark = this.unbookmark.bind(this);
    }
    
    toggleBookmark (ev) {
        // console.log('Toggle Bookmark');
        if(this.props.bookmarkId) {
            this.unbookmark();
        } else {
            this.bookmark();
        }
    }

    bookmark () {
        // console.log('Bookmark')
        const postId = this.props.postId;
        fetch('/api/bookmarks/', {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify({
                post_id: postId
            }),
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // call parent Component's function
            this.props.requeryPost();
        })
    }

    unbookmark () {
        // console.log('Unbookmark')
        const bookmarkId = this.props.bookmarkId
        fetch('/api/bookmarks/' + bookmarkId, {
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
        const bookmarkId = this.props.bookmarkId;
        return (
            <button 
                role="switch"
                onClick={ this.toggleBookmark }
                aria-checked={ bookmarkId ? true: false }>
                <i className={ bookmarkId ? 'fas fa-bookmark': 'far fa-bookmark'}></i>
            </button>
        )
    }
}

// export post class
export default BookmarkButton;
