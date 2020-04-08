import React, { useState } from 'react';

const EditTodos = ({ todo }) => {

  const [ description, setDescription ] = useState(todo.description);

  const updateDescription = async (e) => {
     e.preventDefault();
     try {
         const body = { description };
         await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
             method: 'PUT',
             headers: {'Content-Type' : 'application/json'},
             body: JSON.stringify(body)
         });

     } catch (err) {
        console.error(err.message);
     }
  }

  return (
      <section>
        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}> Edit </button>

        <section className="modal fade" 
                 id={`id${todo.todo_id}`} 
                 tabindex="-1" role="dialog" 
                 aria-labelledby="exampleModalLabel" 
                 aria-hidden="true"
                 onClick={() => setDescription(todo.description)}>
        <section className="modal-dialog" role="document">
            <section className="modal-content">
                <section className="modal-header">
                    <button type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={() => setDescription(todo.description)}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                </section>
                <section className="modal-body">
                    <input type='text' 
                           className='form-control' 
                           value={description} 
                           onChange={(e) => setDescription(e.target.value)} />
                </section>
                <section className="modal-footer">
                    <button type="button" 
                            className="btn btn-primary"
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={(e) => updateDescription(e)}
                            >
                            Save changes
                    </button>
                </section>
            </section>
        </section>
        </section>
      </section>
  )
}

export default EditTodos;