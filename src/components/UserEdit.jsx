import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const UserEdit = () => {
   const navigate = useNavigate();
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <div className='container'>
         <h2>Edit User</h2>
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
            </div>

            <button type='submit' className='btn btn-outline-primary'>
               Save Changes
            </button>
         </form>
      </div>
   );
};

export default UserEdit;
