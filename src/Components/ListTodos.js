import React, { useEffect, useState } from 'react';

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

  const getTodos = async() => {
    try {
        const response = await fetch('http://localhost:5000/todos');
        const jsonResp = await response.json();
        setTodos(jsonResp);
    } catch (err) {
        console.error(err.message)
    }
  };
  
  useEffect (() => {
    getTodos();
  }); 

  const deleteTodo = async (id) => {
    try {
       await fetch(`http://localhost:5000/todos/${id}`, {
          method: 'DELETE'  
      });
    } catch (err) {
      console.error(err.message);
    }
  }

    return (
        <section>
          <table className="table mt-5 text-center">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => {
                    return <tr key={todo.todo_id}>
                    <th scope="row">{todo.todo_id}</th>
                    <td>{todo.description}</td>
                    <td><button className='btn btn-warning'>Edit</button></td>
                    <td><button className='btn btn-danger' onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                    </tr> 
                })}
            </tbody>
          </table>
        </section>
    )
};

export default ListTodos;