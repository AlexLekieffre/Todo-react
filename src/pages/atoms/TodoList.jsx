import React from 'react'
import InputTodo from '../../components/InputTodo'

export default function TodoList({ thisTodoList , handleDeleteList }) {


    return (
        <div className="todoList">
            <div className="header-todo">
              <span>{thisTodoList.id}</span>
               <span> {thisTodoList.titleTodo}</span>
                <button onClick={()=>handleDeleteList(thisTodoList.id)} >x</button>
            </div>
            <div className="body-todo">
                <InputTodo id={thisTodoList.id} />
            </div>
            
        </div>
    )
}
