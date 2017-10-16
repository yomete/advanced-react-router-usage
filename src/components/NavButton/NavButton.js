import React from 'react';
import { Link } from 'react-router-dom'

const button = {
    backgroundColor: 'white',
    padding: 20,
    color: '#3944d7',
    borderRadius: 5
}

const Button = (props) => {
    return (
        <Link to={props.link}>
            <a style={button}>{props.name}</a>
        </Link>
    )
}

export default Button