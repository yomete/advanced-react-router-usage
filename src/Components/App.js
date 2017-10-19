import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { routes } from '../router-config'
import { NotFound } from '../Components'

export default class App extends Component {
  render() {
    return (
      <div>
          <header className="header container">
            <nav className="navbar">
                <div className="navbar-brand">
                    <NavLink to="/" activeClassName="active">
                        <span className="navbar-item">Home</span>
                    </NavLink>
                </div>

                <div className="navbar-end">
                    <NavLink to="/about" activeClassName="active">
                        <span className="navbar-item">About</span>
                    </NavLink>
                    <NavLink to="/somepage" activeClassName="active">
                        <span className="navbar-item">404 Page</span>
                    </NavLink>
                </div>

            </nav>
          </header>

          <div className="container">
              <Switch>
                  {routes.map((route,index) => (
                      <Route key={index} path={route.path} component={route.component} exact={route.exact} />
                  ))}
                  <Route component={NotFound}/>
              </Switch>
          </div>
      </div>
    )
  }
}