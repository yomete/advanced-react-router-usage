import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    render () {
        return (
            <div className="container home">
                <h1>Advanced React Router Concepts</h1>
                <p><strong>Scroll Restoration</strong></p>

                <p>In earlier versions of React Router we provided out-of-the-box support for scroll restoration and people have been asking for it ever since. Hopefully this document helps you get what you need out of the scroll bar and routing!</p>
                <p>Browsers are starting to handle scroll restoration with history.pushState on their own in the same manner they handle it with normal browser navigation. It already works in chrome and it’s really great. Here’s the Scroll Restoration Spec.</p>

                <p>Because browsers are starting to handle the “default case” and apps have varying scrolling needs (like this website!), we don’t ship with default scroll management. This guide should help you implement whatever scrolling needs you have.</p>

                <p>Most of the time all you need is to “scroll to the top” because you have a long content page, that when navigated to, stays scrolled down. This is straightforward to handle with a component that will scroll the window up on every navigation, make sure to wrap it in withRouter to give it access to the router’s props:</p>

                <p>First, ScrollRestoration would scroll the window up on navigation. Second, it would use location.key to save the window scroll position and the scroll positions of RestoredScroll components to sessionStorage. Then, when ScrollRestoration or RestoredScroll components mount, they could look up their position from sessionsStorage.</p>

                <p>What got tricky for me was defining an “opt-out” API for when I didn’t want the window scroll to be managed. For example, if you have some tab navigation floating inside the content of your page you probably don’t want to scroll to the top (the tabs might be scrolled out of view!).</p>

                <p>When I learned that chrome manages scroll position for us now, and realized that different apps are going to have different scrolling needs, I kind of lost the belief that we needed to provide something–especially when people just want to scroll to the top (which you saw is straight-forward to add to your app on your own).</p>

                <p>Based on this, we no longer feel strongly enough to do the work ourselves (like you we have limited time!). But, we’d love to help anybody who feels inclined to implement a generic solution. A solid solution could even live in the project. Hit us up if you get started on it :)</p>
            </div>
        )
    }
}

export default Home