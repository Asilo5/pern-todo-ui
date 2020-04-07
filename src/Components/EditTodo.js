import React, { useState } from 'react';

const EditTodos = ({ todo }) => {

  const [ description, setDescription ] = useState(todo.description);

  return (
      <section>
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}> Edit </button>

        <section class="modal fade" id={`id${todo.todo_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <section class="modal-dialog" role="document">
            <section class="modal-content">
                <section class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </section>
                <section class="modal-body">
                    <input type='text' className='form-control' value={description} />
                </section>
                <section class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                </section>
            </section>
        </section>
        </section>
      </section>
  )
}

export default EditTodos;