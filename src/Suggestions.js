import React from 'react';
import { getHeaders } from './utils';
import Suggestion from './Suggestion.js'

class Suggestions extends React.Component {
    constructor(props) {
        super(props);
        // constructor logic
        // console.log('Suggestions component created');
        this.state = {
            suggestions: []
        }
        this.getSuggestions();
    }

    getSuggestions() {
        fetch("https://photo-app-secured.herokuapp.com/api/suggestions/", {
                method: "GET",
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    suggestions: data
                })
                // console.log(this.state.suggestions)
            });
    }

    render() {
        return ( 
            <div className = "suggestions">
                <p className = "suggestion-text" > Suggestions for you </p> 
                { 
                    this.state.suggestions.map(suggestion => {
                        return <Suggestion model={suggestion} key={'suggestion-' + suggestion.id}/>
                    })
                }
            </div>
        )
    }
}

export default Suggestions;