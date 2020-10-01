import React from 'react'

const UserOutput = (props) => {
    const style = {
        width: '50%',
        backgroundColor: 'grey',
        border: '1px solid black',
        margin: '10px auto'
    }
    return (
        <div style={style}>
            <p> User Output {props.username} {props.surname}</p>
            <p> {props.children}</p>
        </div>
    )
}


export default UserOutput;