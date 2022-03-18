import React from 'react';
import { getHeaders } from './utils';
import Story from './Story.js'

class Stories extends React.Component {  

    constructor(props) {
        super(props);
        // constructor logic
        // might have to initialize state
        this.state={
            stories: []
        };
    }

    componentDidMount() {
        // fetch stories
        fetch("https://photo-app-secured.herokuapp.com/api/stories/", {
            method: "GET",
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ 
                stories: data
            })
        });
    }

    render () {
        return (
            <header className="stories">
                {this.state.stories.map(story => 
                    <Story model={story} key={'story-' + story.id}/>)}
            </header>  
        );
    }
}

export default Stories;