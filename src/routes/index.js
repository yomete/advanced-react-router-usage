import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import NotFound from '../components/NotFound/NotFound'
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();


class Routes extends Component {
    render () {
        return (
            <Router history={history}>
                <div>
                    <header className="header container">
                        <nav className="navbar">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <span className="navbar-item">Home</span>
                                </Link>
                            </div>
                            <div className="navbar-end">
                                <Link to="/about">
                                    <span className="navbar-item">About</span>
                                </Link>
                                <Link to="/somepage">
                                    <span className="navbar-item">404 Page</span>
                                </Link>
                            </div>
                        </nav>
                    </header>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes