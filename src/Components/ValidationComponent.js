import React from 'react'

const ValidationComponent = (props) => {
    
    let charLength = props.charLength > 5 ? (
        <div>{ <p>Text long enough.</p> }</div>) : (
        <div>{ <p>Text too short.</p> }</div> )

    // if(props.charLength > 5){
    //     charLength = (
    //         <div>
    //             {
    //                 <p>Text long enough.</p>
    //             }
    //         </div>
    //     )
    // }else {
    //     charLength = (
    //         <div>
    //             {
    //                 <p>Text too short.</p>
    //             }
    //         </div>
    //     )
    // }
    return (
        <div>
            {charLength}
        </div>
    )
}

export default ValidationComponent;