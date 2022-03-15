import React from 'react';
import {getHeaders} from './utils.js'

class Suggestion extends React.Component {  

    constructor(props) {
        super(props);
        // console.log('Passed into Post.js by Post:', this.props.model)
        this.state = {
            model: this.props.model
        }
        // keyword this will permanently refer to instance
        // this.requeryPost = this.requeryPost.bind(this);
    }
    
    // requeryPost() {
    //     // get a post with an updated data structure from the Server
    //     // i.e. new comment, like, or bookmark
    //     fetch('/api/posts/' + this.props.model.id, {
    //         headers: getHeaders(),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         // console.log('Updated post:', data);
    //         // after we retrieve the data, we need to redraw the component.
    //         this.setState({ 
    //             model: data
    //         })
    //     })
    // }

    render () {
        const suggestion = this.state.model;
        if (!suggestion) {
            return (
                <div></div>  
            );
        }
        console.log(this.props.model)
        return (
            <div className="suggestion">
                <div className="pfp-wrapper">
                    <img src={suggestion.thumb_url} className="acc-pfp" alt={"profile picture for " + suggestion.username}></img>
                </div>
                    <p className="user"><a href="#">{suggestion.username}</a></p>
                    <p className="follow"><a href="#">follow</a></p>
                <br></br>
                    <p className="user-caption">suggested for you</p>
            </div>

        );     
    }
}

// export post class
export default Suggestion;
