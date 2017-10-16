import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import { AnimatedSwitch, spring } from 'react-router-transition';
import Home from '../components/Home/Home'
import NotFound from '../components/NotFound/NotFound'
import One from '../components/One/One'
import Two from '../components/Two/Two'
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();


function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

// child matches will...
const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
};

class Routes extends Component {
    render () {
        return (
            <Router history={history}>
                <div>
                    <header className="header container">
                        <nav className="navbar">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <span className="navbar-item">DNGGITGN</span>
                                </Link>
                            </div>
                        </nav>
                    </header>
                    <AnimatedSwitch
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                        mapStyles={mapStyles}
                        className="route-wrapper"
                    >
                        <Route exact path="/" component={Home} />
                        <Route path="/p/1" component={One} />
                        <Route path="/p/2" component={Two} />
                        <Route path="*" component={NotFound} />
                    </AnimatedSwitch>
                    {/*<Switch>*/}
                        {/*<Route exact path="/" component={Home} />*/}
                        {/*<Route path="/p/1" component={One} />*/}
                        {/*<Route path="/p/2" component={Two} />*/}
                        {/*<Route path="*" component={NotFound} />*/}
                    {/*</Switch>*/}
                </div>
            </Router>
        )
    }
}

export default Routes