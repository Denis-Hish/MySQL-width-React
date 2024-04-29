import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UserEdit = () => {
   const [userData, setUserData] = useState({
      name: '',
      username: '',
      email: '',
      phoneno: '',
      countryid: '',
      stateid: '',
   });
   const [message, setMessage] = useState('');
   const navigate = useNavigate();
   const { id } = useParams(); // Получение id пользователя из URL
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   useEffect(() => {
      const fetchUserData = async () => {
         try {
            const response = await axios.get(
               `http://localhost:8000/api/useredit/${id}`
            );
            const { name, username, email, phoneno, countryid, stateid } =
               response.data;
            setUserData({ name, username, email, phoneno, countryid, stateid });
         } catch (error) {
            console.error('Error fetching user data:', error);
         }
      };
      fetchUserData();
   }, [id]);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
   };

   const onSubmit = (data) => {
      console.log(data);

      const res = axios
         .put(`http://localhost:8000/api/useredit/${id}`, data)
         .then((response) => {
            setMessage(response.data);
            setTimeout(() => {
               navigate('/userlist');
            }, 10000);
         })
         .catch((error) => {
            console.error('Error updating user:', error);
            setMessage('Some error occurred');
         });
   };

   return (
      <div className='container'>
         <h2 className='text-center mt-3'>Edit User</h2>
         <p className='text-success error-message mb-0'>{message}</p>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
               <div className='col-md-6'>
                  <div className='bm-3'>
                     <label className='form-lable' htmlFor='nameId'>
                        Name<span className='text-danger'>*</span>
                     </label>
                     <input
                        className='form-control'
                        id='nameId'
                        type='text'
                        value={userData.name}
                        onChange={handleInputChange}
                        {...register('name', {
                           required: true,
                        })}
                     />
                     <span className='text-danger error-message'>
                        {errors.name?.type === 'required' &&
                           'Name is requireded'}
                     </span>
                  </div>
               </div>
               <div className='col-md-6'>
                  <div className='mb-3'>
                     <label className='form-lable' htmlFor='usernameId'>
                        User name
                        <span className='text-danger'>*</span>
                     </label>
                     <input
                        className='form-control'
                        id='usernameId'
                        type='text'
                        value={userData.username}
                        {...register('username', {
                           required: true,
                           pattern: /^[a-zA-Z0-9_]+$/i,
                        })}
                     />
                     <span className='text-danger error-message'>
                        {errors.username?.type === 'required' &&
                           'User name is requireded'}
                        {errors.username?.type === 'pattern' &&
                           'User name is wrong format'}
                     </span>
                  </div>
               </div>
               <div className='col-md-6'>
                  <div className='mb-3'>
                     <label className='form-lable' htmlFor='emailId'>
                        E-mail<span className='text-danger'>*</span>
                     </label>
                     <input
                        className='form-control'
                        id='emailId'
                        type='text'
                        value={userData.email}
                        {...register('email', {
                           required: true,
                           pattern:
                              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                        })}
                     />
                     <span className='text-danger error-message'>
                        {errors.email?.type === 'required' &&
                           'E-mail is requireded'}
                        {errors.email?.type === 'pattern' &&
                           'Enter valid e-mail'}
                     </span>
                  </div>
               </div>
               <div className='col-md-6'>
                  <div className='mb-3'>
                     <label className='form-lable' htmlFor='phoneId'>
                        Phone
                        <span className='text-danger'>*</span>
                     </label>
                     <input
                        className='form-control'
                        id='phoneId'
                        type='number'
                        value={userData.phoneno}
                        {...register('phoneno', {
                           required: true,
                           minLength: 6,
                           maxLength: 12,
                        })}
                     />
                     <span className='text-danger error-message'>
                        {errors.phoneno?.type === 'required' &&
                           'Phone number is requireded'}
                        {errors.phoneno?.type === 'minLength' &&
                           'Entered phone number is less then 6 digits'}
                        {errors.phoneno?.type === 'maxLength' &&
                           'Entered phone number is more then 12 digits'}
                     </span>
                  </div>
               </div>
               <div className='col-md-6'>
                  <div className='mb-3'>
                     <label className='form-lable' htmlFor='countryId'>
                        Country
                        <span className='text-danger'>*</span>
                     </label>
                     <select
                        className='form-control'
                        id='countryId'
                        name='country'
                        {...register('countryid', {
                           required: true,
                        })}
                        value={userData.countryid}
                     >
                        <option value={userData.countryid}>
                           {userData.countryid}
                        </option>
                     </select>
                  </div>
               </div>
               <div className='col-md-6'>
                  <div className='mb-3'>
                     <label className='form-lable' htmlFor='stateId'>
                        State
                        <span className='text-danger'>*</span>
                     </label>
                     <select
                        className='form-control'
                        id='stateId'
                        name='stateid'
                        {...register('stateid', {
                           required: true,
                        })}
                        value={userData.stateid}
                     >
                        <option value={userData.stateid}>
                           {userData.stateid}
                        </option>
                     </select>
                     <span className='text-danger error-message'>
                        {errors.stateid?.type === 'required' &&
                           'State is requireded'}
                     </span>
                  </div>
               </div>
            </div>
            <button type='submit' className='btn btn-outline-primary'>
               Save Changes
            </button>
         </form>
      </div>
   );
};

export default UserEdit;
