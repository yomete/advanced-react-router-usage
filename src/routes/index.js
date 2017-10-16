import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import Home from '../components/Home/Home'
import NotFound from '../components/NotFound/NotFound'
import About from '../components/About/About'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class Routes extends Component {
    render () {
        return (
            <Router history={history}>
                <ScrollToTop>
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
                                        <span className="navbar-item">404 page</span>
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
                </ScrollToTop>
            </Router>
        )
    }
}

export default Routes