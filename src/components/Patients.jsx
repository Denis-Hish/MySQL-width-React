import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Patients = () => {
   const [userData, setUserData] = useState([]);

   useEffect(() => {
      const getUserData = async () => {
         const reqData = await fetch('http://localhost:8000/api/user');
         const resData = await reqData.json();
         setUserData(resData);
      };
      getUserData();
   }, []);

   return (
      <React.Fragment>
         <div className='container'>
            <div className='mt-3'>
               <h2 className='text-center'>Patients list</h2>
               <div className='row'>
                  <div className='col-md-12'>
                     <table className='table table-bordered table-hover align-middle'>
                        <thead className='table-info'>
                           <tr className='text-center'>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Date</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {userData.map((useritem, index) => (
                              <tr key={index}>
                                 <td>{useritem.id}</td>
                                 <td>{useritem.name}</td>
                                 <td>
                                    {new Date(
                                       useritem.date
                                    ).toLocaleDateString()}
                                 </td>
                                 <td className='text-center'>
                                    <Link
                                       to='patientedit'
                                       className='btn btn-outline-success btn-hovered me-3'
                                    >
                                       <i className='bi bi-pencil'></i>
                                    </Link>
                                    <Link
                                       to='patientdelete'
                                       className='btn btn-outline-danger btn-hovered'
                                    >
                                       <i className='bi bi-trash'></i>
                                    </Link>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Patients;
