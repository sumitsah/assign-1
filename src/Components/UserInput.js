import React from 'react';
import './component.css'

const UserInput = (props) => {
    return (
        <div className="Userinput">
             <input type="text" onChange={props.changed} value={props.surname}></input>
        </div>
    )
}

export default UserInput;