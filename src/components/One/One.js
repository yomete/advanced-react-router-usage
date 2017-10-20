import React, { Component } from 'react'
import Button from '..//NavButton/NavButton'

class One extends Component {
    render () {
        return (
            <div className="poem-container inner">
                <div>
                    <p>
                        Do not go gentle into that good night,<br/>
                        Old age should burn and rave at close of day;<br/>
                        Rage, rage against the dying of the light.
                    </p>

                    <p>
                        Though wise men at their end know dark is right,<br/>
                        Because their words had forked no lightning they<br/>
                        Do not go gentle into that good night.
                    </p>

                    <p>
                        Good men, the last wave by, crying how bright<br/>
                        Their frail deeds might have danced in a green bay,<br/>
                        Rage, rage against the dying of the light.
                    </p>
                </div>
                <Button name="Next" link="/p/2"/>
            </div>
        )
    }
}

export default One