import React from 'react';
import {getHeaders} from './utils.js'

class Suggestion extends React.Component {  

    constructor(props) {
        super(props);
        // console.log('Passed into Post.js by Post:', this.props.model)
        this.state = {
            following: false,
            following_id: null
        }
        // keyword this will permanently refer to instance
        // this.requeryPost = this.requeryPost.bind(this);
        this.toggleFollow = this.toggleFollow.bind(this);
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

    toggleFollow (e) {
        e.preventDefault()
        // console.log('follow clicked')
        if (this.state.following) {
            console.log('unfollow');
            this.unfollow();
        }
        else {
            console.log('follow')
            this.follow();
        }
    }

    unfollow () {
        fetch("/api/following/" + this.state.following_id, {
            method: "DELETE",
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                following: false
            })
        });
    }

    follow () {
        const postData = {
            "user_id": this.props.model.id
        };
        
        fetch("/api/following/", {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    following: true,
                    following_id: data.id
                })
            });
    }

    render () {
        const suggestion = this.props.model;
        if (!suggestion) {
            return (
                <div></div>  
            );
        }
        return (
            <div className="suggestion">
                <div className="pfp-wrapper">
                    <img src={suggestion.thumb_url} className="acc-pfp" alt={"profile picture for " + suggestion.username}></img>
                </div>
                    <p className="user"><a href="#">{suggestion.username}</a></p>
                    {/* <p className="follow"><a onClick={this.toggleFollow}href="#">follow</a></p> */}
                    <button
                        role="switch"
                        className="link following"
                        id={"follow-" + suggestion.username}
                        aria-checked={ this.state.following ? true : false }
                        aria-label={"Follow " + suggestion.username}
                        onClick={this.toggleFollow}>
                            {this.state.following ? "Unfollow" : "Follow"}
                    </button>
                <br></br>
                    <p className="user-caption">suggested for you</p>
            </div>
        );     
    }
}

// export post class
export default Suggestion;
