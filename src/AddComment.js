import React from 'react';
import {getHeaders} from './utils.js';

class AddComment extends React.Component {  

    constructor(props) {
        super(props);

        // Comment form needs
        // 1. post id and text to comment
        
        // React is the single state of truth
        this.state = {value: ''};

        // ref to store dom element
        this.textInput = React.createRef();

        // bind methods to handle changes in state and submission
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
        event.preventDefault();
        const postData = {
            "post_id": this.props.postId,
            "text": this.state.value
        };
        
        fetch("https://photo-app-secured.herokuapp.com/api/comments", {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.props.requeryPost();
                this.setState({
                    value: ''
                });
                this.textInput.current.focus();
            });        
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
      }

    // submit post on Enter
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          this.handleSubmit();
        }
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className="add-comment">
                <div className="input-holder">
                    <label hidden htmlFor={this.state.value}>Name</label>
                    <input 
                        placeholder="Enter a comment..." 
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        aria-label={"Comment for " + this.props.postId}
                        ref={this.textInput} 
                        onKeyDown={this._handleKeyDown}/>
                </div>
                <button value="submit" className="link">Post</button>
            </form>
        );
    }
}

// export post class
export default AddComment;
