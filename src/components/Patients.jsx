import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Patients = () => {
   const [userData, setUserData] = useState([]);

   const [filteredData, setFilteredData] = useState([]);
   const [nameFilter, setNameFilter] = useState('');
   const [dateFilterFrom, setDateFilterFrom] = useState('');
   const [dateFilterTo, setDateFilterTo] = useState('');

   useEffect(() => {
      const getUserData = async () => {
         const reqData = await fetch('http://localhost:8000/api/user');
         const resData = await reqData.json();
         setUserData(resData);
         setFilteredData(resData);
      };
      getUserData();
   }, []);

   useEffect(() => {
      // Фильтрация при изменении состояний полей ввода
      filterData();
   }, [nameFilter, dateFilterFrom, dateFilterTo]);

   const filterData = () => {
      let filtered = [...userData];

      // Фильтрация по имени
      if (nameFilter.trim() !== '') {
         filtered = filtered.filter((item) =>
            item.name.toLowerCase().includes(nameFilter.toLowerCase())
         );
      }

      // Фильтрация по дате "От"
      if (dateFilterFrom !== '') {
         filtered = filtered.filter(
            (item) => new Date(item.date) >= new Date(dateFilterFrom)
         );
      }

      // Фильтрация по дате "До"
      if (dateFilterTo !== '') {
         filtered = filtered.filter(
            (item) => new Date(item.date) <= new Date(dateFilterTo)
         );
      }

      setFilteredData(filtered);
   };

   // Уникальных пользователей
   const uniqueUsersCount = new Set(filteredData.map((user) => user.name)).size;

   return (
      <React.Fragment>
         <div className='container'>
            <h2 className='text-center mt-3'>Patients list</h2>
            <div className='inputs-date d-flex align-items-center mt-4 mb-3'>
               <span className='me-2'>From</span>
               <input
                  type='text'
                  id='input-name'
                  className='form-control w-auto'
                  value={nameFilter}
                  onChange={(e) => setNameFilter(e.target.value)}
               />
               <span className='ms-5 me-2'>From</span>
               <input
                  type='date'
                  id='input-date-from'
                  className='form-control w-auto'
                  value={dateFilterFrom}
                  onChange={(e) => setDateFilterFrom(e.target.value)}
               />
               <span className='ms-5 me-2'>To</span>
               <input
                  type='date'
                  id='input-date-to'
                  className='form-control w-auto'
                  value={dateFilterTo}
                  onChange={(e) => setDateFilterTo(e.target.value)}
               />
               <span className='ms-5 me-2'>
                  Unique: <strong>{uniqueUsersCount}</strong>
               </span>
            </div>

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
                        {filteredData.map((useritem, index) => (
                           <tr key={index}>
                              <td>{useritem.id}</td>
                              <td>{useritem.name}</td>
                              <td>
                                 {new Date(useritem.date).toLocaleDateString()}
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
      </React.Fragment>
   );
};

export default Patients;
