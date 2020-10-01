import React from 'react'

const CharComponent = (props) => {
    const inlineStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    return (
        <div style={inlineStyle} onClick={props.clicked}>
            <p>{props.chara}</p>
        </div>
    )
}

export default CharComponent;