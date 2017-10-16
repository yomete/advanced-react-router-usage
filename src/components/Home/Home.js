import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    render () {
        return (
            <div className="container home">
                <h1>Advanced React Router Concepts</h1>
                <p><strong>Code Splitting</strong></p>
                <p>One great feature of the web is that we don't have to make our visitors download the entire app before they can use it. You can think of code splitting as incrementally downloading the app. </p>
                <p>Code splitting allows for dividing your code into smaller chunks in such a way that each chunk can be loaded on demand, in parallel, or conditionally.</p>
            </div>
        )
    }
}

export default Home