import React from 'react'
import './todo.css'

function Todo(props) {
    return (
        <div>
            <h3 className= 'lists'>{props.text}</h3>
        </div>
    )
}

export default Todo
