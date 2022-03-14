// Component imports
import React from 'react';
import Posts from './Posts.js'
import NavBar from './NavBar.js'
import Profile from './Profile.js'
import Suggestions from './Suggestions.js'
import Stories from './Stories.js'

class App extends React.Component {  

    render () {
        return (
            <div>

            {/* I will have to update username */}
            <NavBar title="Photo App" username="webdev"></NavBar>

            <aside>
                <Profile />
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