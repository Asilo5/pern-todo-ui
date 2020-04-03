import React, { useState } from 'react';

const InputTodo = () => {

   const [description, setDescription] = useState('');

    return (
        <section className='text-center mt-5'>
            <h2>PERN Todo List</h2>
            <form className='d-flex mt-5'>
                <input type='text' 
                       className='form-control' 
                       value={description} 
                       onChange = {(e) => setDescription(e.target.value)}
                />
                <button className='btn btn-success' >Add</button>
            </form>
        </section>
    )
}

export default InputTodo; 