import React from 'react'

export default function TextError(props) {
    return (
        <div className="text-red-500">
            {props.children}
        </div>
    )
}
