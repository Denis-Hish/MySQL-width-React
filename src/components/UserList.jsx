import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
   return (
      <React.Fragment>
         <div className='container'>
            <div className='row'>
               <div className='col-md-12'>
                  <h5 className='mt-2'>User list</h5>
                  <div className='d-grid d-md-flex justify-content-md-end mb-3'>
                     <Link
                        to='/userregistration'
                        className='btn btn-outline-primary'
                     >
                        <i className='bi bi-person-plus me-2'></i>
                        Add new user
                     </Link>
                  </div>
                  <table className='table table-bordered table-hover align-middle'>
                     <thead className='table-info'>
                        <tr className='text-center'>
                           <th>Sr. no</th>
                           <th>Name</th>
                           <th>User name</th>
                           <th>E-mail</th>
                           <th>Phone</th>
                           <th>Gender</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>1</td>
                           <td>John</td>
                           <td>Doe</td>
                           <td>john@mail.com</td>
                           <td>3535435434</td>
                           <td>male</td>
                           <td className='text-center'>
                              <Link
                                 to='/userEdit'
                                 className='btn btn-outline-success me-3'
                              >
                                 <i className='bi bi-pencil'></i>
                              </Link>
                              <Link
                                 to='/userDelete'
                                 className='btn btn-outline-danger'
                              >
                                 <i className='bi bi-trash'></i>
                              </Link>
                           </td>
                        </tr>
                        <tr>
                           <td>1</td>
                           <td>Jack</td>
                           <td>Black</td>
                           <td>jack@mail.com</td>
                           <td>6984635754</td>
                           <td>male</td>
                           <td className='text-center'>
                              <Link
                                 to='/userEdit'
                                 className='btn btn-outline-success me-3'
                              >
                                 <i className='bi bi-pencil'></i>
                              </Link>
                              <Link
                                 to='/userDelete'
                                 className='btn btn-outline-danger'
                              >
                                 <i className='bi bi-trash'></i>
                              </Link>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default UserList;
