import React, { Component } from 'react'
import './About.css'
import { Link, Route } from 'react-router-dom'

class About extends Component {

    componentDidMount () {
        console.log(this.props.match.url)
    }

    render () {
        return (
            <div className="container">
                <h1>Recursive paths</h1>
                <p>Keep clicking the links below for a recursive pattern.</p>
                <div>
                    <ul>
                        <li><Link className="active" to={this.props.match.url + "/1"}>Link 1</Link></li>
                        <li><Link className="active" to={this.props.match.url + "/2"}>Link 2</Link></li>
                        <li><Link className="active" to={this.props.match.url + "/3"}>Link 3</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="recursive-links">New recursive content appears here</p>
                    <Route path={`${this.props.match.url}/:level`} component={About} />
                </div>
            </div>
        )
    }
}

export default About