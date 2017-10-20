import React, { Component } from 'react'
import Button from '..//NavButton/NavButton'

class Two extends Component {
    render () {
        return (
            <section>
                <div className="poem-container inner">
                    <div>
                        <p>
                            Wild men who caught and sang the sun in flight,<br/>
                            And learn, too late, they grieved it on its way,<br/>
                            Do not go gentle into that good night.
                        </p>

                        <p>
                            Grave men, near death, who see with blinding sight<br/>
                            Blind eyes could blaze like meteors and be gay,<br/>
                            Rage, rage against the dying of the light.
                        </p>

                        <p>
                            And you, my father, there on the sad height,<br/>
                            Curse, bless, me now with your fierce tears, I pray.<br/>
                            Do not go gentle into that good night.<br/>
                            Rage, rage against the dying of the light.
                        </p>
                    </div>
                </div>
                <Button name="Previous" link="/p/1"/>
            </section>
        )
    }
}

export default Two