import React from 'react'

import './modal.css'

const modal = props => {
    return(
        <div className="modal-container">
            <div className="modal-box">
                <p>{props.text}</p>
            </div>

        </div>
    )
}

export default modal
