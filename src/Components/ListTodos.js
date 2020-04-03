import React from 'react';

const ListTodos = () => {
  
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
                {/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr> */}
            </tbody>
          </table>
        </section>
    )
};

export default ListTodos;