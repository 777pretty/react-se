import React from 'react'

const PageButton = (props) => {
    return(
        <button value={props.name} className="lilButton" onClick={props.onClick} >{props.name} </button>
    )
}

export default PageButton