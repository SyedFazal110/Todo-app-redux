import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, removeTodo } from './config/reducers/todoSlice';

const App = () => {

  // use ref for forms value
  const ref = useRef()

  // use selector
  const selector = useSelector(state => state.todos.todos);
  console.log(selector)

  // useDispatch 
  const dispatch = useDispatch()

  // add todo into redux

  const todo = (event) => {
    event.preventDefault()
    console.log(ref.current.value)
    dispatch(addTodo({
      title: ref.current.value
    }))
  }

  // delete todo
  const deleteTodo = (index)=>{
    console.log('todo delete' , index);
    dispatch(removeTodo({
      index
    }))
    
  }


  // update Todo
  const updateTodo = (index)=>{
    const promptTitle = prompt("enter data")
    dispatch(editTodo({
      title: promptTitle,
      index 
    }))

    



  }

  return (
    <>
    <h1>Todo App</h1>
      <form onSubmit={todo}>
        <input type="text" placeholder='enter todo' ref={ref} />
        <button >addTodo</button>
      </form>

      <ol>
        {selector.map((item , index) => <li key={item.id}>{item.title}  <button onClick={()=> updateTodo(index)}>Edit</button><button onClick={()=> deleteTodo(index)}>Delete</button> </li>)}
      </ol>
    </>
  )
}

export default App