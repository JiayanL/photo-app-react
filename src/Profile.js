import React from 'react';

class Profile extends React.Component {  

    // useless constructor

    componentDidMount() {
        // fetch posts
        // console.log('Profile component mounted');
    }

    render () {
        return (
            <div className="profile">
                <div className="circular-pfp">
                    <img src={this.props.pfp} 
                    alt={"profile picture for " + this.props.username} id="pfp"></img>
                </div>
                <a href="#">{this.props.username}</a>
            </div>
        )
    }
}

export default Profile;