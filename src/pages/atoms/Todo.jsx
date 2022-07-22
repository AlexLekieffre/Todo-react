import React from 'react'
import { toggleTodo } from '../../hooks/hook-todo'

export default function Todo({ todo, todos, majTodo, handleDeletetodo }) {
    
    return (
        <div>
            <div className="todo">
                <span>{todo.id}-</span><span>{todo.titleTodo}</span>
                
                
                </div>
            <div className="toggle">
                <button onClick={() => toggleTodo(todos, todo, majTodo)}>
                    {todo.complete ? (
                        <span>←</span>
                    ) : (
                        <span>→</span>
                    )}
                </button>
                {todo.complete ?( <button onClick={()=>{handleDeletetodo(todo.id)}}><span>x</span></button> ): null}
            </div>
        </div>
    )
}
