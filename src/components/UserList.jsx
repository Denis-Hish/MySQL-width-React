import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

const UserList = () => {
   const [userData, setUserData] = useState([]);
   const componentPDF = useRef();

   useEffect(() => {
      const userregisterdata = async () => {
         axios
            .get('http://localhost:8000/api/userregisterdata')
            .then((res) => setUserData(res.data))
            .catch((error) => console.log(error));
      };
      userregisterdata();
   }, []);

   const generatePDF = useReactToPrint({
      content: () => componentPDF.current,
      documentTitle: 'User list',
      onAfterPrint: () => console.log('Data saved in PDF'),
   });

   return (
      <React.Fragment>
         <div className='container'>
            <div className='row'>
               <div className='col-md-12'>
                  <h2 className='text-center mt-3'>User list</h2>
                  <div className='d-grid d-md-flex justify-content-md-end mb-3'>
                     <Link
                        to='/userregistration'
                        className='btn btn-outline-primary'
                     >
                        <i className='bi bi-person-plus me-2'></i>
                        Add new user
                     </Link>
                  </div>
                  <div
                     ref={componentPDF}
                     style={{ width: '100%', padding: '20px' }}
                  >
                     <table className='table table-bordered table-hover align-middle'>
                        <thead className='table-info'>
                           <tr className='text-center'>
                              <th>Sr. no</th>
                              <th>Name</th>
                              <th>User name</th>
                              <th>E-mail</th>
                              <th>Phone</th>
                              <th>Country</th>
                              <th>State</th>
                              <th className='not-print'>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {userData.map((uData, index) => {
                              return (
                                 <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{uData.name}</td>
                                    <td>{uData.username}</td>
                                    <td>{uData.email}</td>
                                    <td>{uData.phoneno}</td>
                                    <td>{uData.countryname}</td>
                                    <td>{uData.state_name}</td>
                                    <td className='text-center not-print'>
                                       <Link
                                          to={`/useredit/${uData.userid}`}
                                          className='btn btn-outline-success me-3'
                                       >
                                          <i className='bi bi-pencil'></i>
                                       </Link>
                                       <Link
                                          to={`/userdelete/${uData.userid}`}
                                          className='btn btn-outline-danger'
                                       >
                                          <i className='bi bi-trash'></i>
                                       </Link>
                                    </td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </table>
                  </div>
                  <div className='d-grid d-md-flex justify-content-md-end mb-3'>
                     <button
                        className='btn btn-outline-secondary'
                        onClick={generatePDF}
                     >
                        <i className='bi bi-file-pdf me-2'></i>
                        PDF
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default UserList;
