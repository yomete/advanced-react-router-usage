import React, { Component } from 'react'
import './Home.css'
import Button from '../../components/NavButton/NavButton'

class Home extends Component {
    render () {
        return (
            <div className="container home">
                <p>A poem by Dylan Thomas</p>
                <p>"Do not go gentle into that good night"</p>
                <Button name="Read" link="/p/1"/>
            </div>
        )
    }
}

export default Home