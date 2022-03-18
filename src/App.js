// Component imports
import React from 'react';
import Posts from './Posts.js'
import NavBar from './NavBar.js'
import Profile from './Profile.js'
import Suggestions from './Suggestions.js'
import Stories from './Stories.js'
import { getHeaders } from './utils.js';

class App extends React.Component {  
    constructor (props) {
        super(props)
        
        // this.getProfile = this.getProfile.bind(this);
        this.state = {
            current_user: ''
        }
        this.getProfile();
    }

    // get current user and save to state
    getProfile () {
        fetch("https://photo-app-secured.herokuapp.com/api/profile/", {
            method: "GET",
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({ 
                current_user: data
            })
        })
    }

    render () {
        return (
            <div>

            <NavBar title="Photo App" username={this.state.current_user.username}></NavBar>

            <aside>
                <Profile 
                    username={this.state.current_user.username}
                    pfp={this.state.current_user.thumb_url}/>
                <Suggestions />
            </aside>

            <main className="content">
                <Stories />
                <Posts />
            </main>

            </div>
        );
    }
}

export default App;