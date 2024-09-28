// import React, { useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addTodo, editTodo, removeTodo } from './config/reducers/todoSlice';

// const App = () => {

//   // use ref for forms value
//   const ref = useRef()

//   // use selector
//   const selector = useSelector(state => state.todos.todos);
//   console.log(selector)

//   // useDispatch 
//   const dispatch = useDispatch()



//   const todo = (event) => {
//     event.preventDefault()
//     console.log(ref.current.value)
//     dispatch(addTodo({
//       title: ref.current.value
//     }))
//   }



//   const deleteTodo = (index)=>{
//     console.log('todo delete' , index);
//     dispatch(removeTodo({
//       index
//     }))
    
//   }



//   const updateTodo = (index)=>{
//     const promptTitle = prompt("enter data")
//     dispatch(editTodo({
//       title: promptTitle,
//       index 
//     }))

    



//   }

//   return (
//     <>
//     <h1>Todo App</h1>
//       <form onSubmit={todo}>
//         <input type="text" placeholder='Enter New Todo' ref={ref} />
//         <button >Click</button>
//       </form>

//       <ol>
//         {selector.map((item , index) => <li key={item.id}>{item.title}  <button onClick={()=> updateTodo(index)}>Edit</button><button onClick={()=> deleteTodo(index)}>Delete</button> </li>)}
//       </ol>
//     </>
//   )
// }

// export default App





import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, removeTodo } from './config/reducers/todoSlice';
import './index.css';

const App = () => {
  const ref = useRef();
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (ref.current.value) {
      dispatch(addTodo({
        title: ref.current.value,
      }));
      ref.current.value = '';
    }
  };

  const handleDeleteTodo = (index) => {
    dispatch(removeTodo({
      index,
    }));
  };

  const handleUpdateTodo = (index) => {
    const promptTitle = prompt("Enter new title");
    if (promptTitle) {
      dispatch(editTodo({
        title: promptTitle,
        index,
      }));
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo App</h1>
      <form className="todo-form" onSubmit={handleAddTodo}>
        <input className="todo-input" type="text" placeholder='Enter New Todo' ref={ref} />
        <button className="todo-button">Add Todo</button>
      </form>
      <ol className="todo-list">
        {todos.map((item, index) => (
          <li key={item.id} className="todo-item">
            {item.title}
            <button className="edit-button" onClick={() => handleUpdateTodo(index)}>Edit</button>
            <button className="delete-button" onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
