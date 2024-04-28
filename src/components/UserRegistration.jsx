import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserRegistration = () => {
   const navigate = useNavigate();
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const [countryData, setCountryData] = useState([]);
   const [stateData, setStateData] = useState([]);
   const [message, setMessage] = useState('');

   useEffect(() => {
      const getCountry = async () => {
         const reqData = await fetch('http://localhost:8000/api/country');
         const resData = await reqData.json();
         setCountryData(resData);
      };
      getCountry();
   }, []);

   const handleCountry = async e => {
      const getCountryId = e.target.value;
      const reqStateData = await fetch(
         'http://localhost:8000/api/state/' + getCountryId
      );
      const resStateData = await reqStateData.json();
      setStateData(resStateData);
      // console.log(resStateData);
   };

   const onSubmit = data => {
      console.log(data);

      const res = axios
         .post('http://localhost:8000/api/adduser', data)
         .then(responce => {
            setMessage(responce.data);
         });

      if (!message) {
         setMessage(res.data);

         setTimeout(() => {
            navigate('/userlist');
         }, 10000);
      } else {
         setMessage('Some error occurred');
      }
   };

   return (
      <React.Fragment>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h5 className="mt-2">User registration form</h5>
                  <p className="text-success error-message mb-0">{message}</p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="row">
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="nameId">
                                 Name<span className="text-danger">*</span>
                              </label>
                              <input
                                 className="form-control"
                                 id="nameId"
                                 type="text"
                                 {...register('name', {
                                    required: true,
                                 })}
                              />
                              <span className="text-danger error-message">
                                 {errors.name?.type === 'required' &&
                                    'Name is requireded'}
                              </span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label
                                 className="form-lable"
                                 htmlFor="usernameId"
                              >
                                 User name
                                 <span className="text-danger">*</span>
                              </label>
                              <input
                                 className="form-control"
                                 id="usernameId"
                                 type="text"
                                 {...register('username', {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9_]+$/i,
                                 })}
                              />
                              <span className="text-danger error-message">
                                 {errors.username?.type === 'required' &&
                                    'User name is requireded'}
                                 {errors.username?.type === 'pattern' &&
                                    'User name is wrong format'}
                              </span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="emailId">
                                 E-mail<span className="text-danger">*</span>
                              </label>
                              <input
                                 className="form-control"
                                 id="emailId"
                                 type="text"
                                 {...register('email', {
                                    required: true,
                                    pattern:
                                       /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                                 })}
                              />
                              <span className="text-danger error-message">
                                 {errors.email?.type === 'required' &&
                                    'E-mail is requireded'}
                                 {errors.email?.type === 'pattern' &&
                                    'Enter valid e-mail'}
                              </span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label
                                 className="form-lable"
                                 htmlFor="passwordId"
                              >
                                 Password
                                 <span className="text-danger">*</span>
                              </label>
                              <input
                                 className="form-control"
                                 id="passwordId"
                                 type="password"
                                 {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                 })}
                              />
                              <span className="text-danger error-message">
                                 {errors.password?.type === 'required' &&
                                    'Password is requireded'}
                                 {errors.password?.type === 'minLength' &&
                                    'Entered password is less then 6 digits'}
                                 {errors.password?.type === 'maxLength' &&
                                    'Entered password is more then 20 digits'}
                              </span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="phoneId">
                                 Phone
                                 <span className="text-danger">*</span>
                              </label>
                              <input
                                 className="form-control"
                                 id="phoneId"
                                 type="number"
                                 {...register('phone', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 12,
                                 })}
                              />
                              <span className="text-danger error-message">
                                 {errors.phone?.type === 'required' &&
                                    'Phone number is requireded'}
                                 {errors.phone?.type === 'minLength' &&
                                    'Entered phone number is less then 6 digits'}
                                 {errors.phone?.type === 'maxLength' &&
                                    'Entered phone number is more then 12 digits'}
                              </span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="genderId">
                                 Gender
                                 <span className="text-danger">*</span>
                              </label>
                              <select
                                 className="form-control"
                                 id="genderId"
                                 name="gender"
                                 {...register('gender', {
                                    required: true,
                                 })}
                              >
                                 <option value="">--Please select--</option>
                                 <option value="Male">Male</option>
                                 <option value="Female">Female</option>
                                 <option value="Other">Other</option>
                              </select>
                              <span className="text-danger error-message">
                                 {errors.gender?.type === 'required' &&
                                    'Gender is requireded'}
                              </span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="countryId">
                                 Country
                                 <span className="text-danger">*</span>
                              </label>
                              <select
                                 className="form-control"
                                 id="countryId"
                                 name="country"
                                 {...register('countryid', {
                                    required: true,
                                 })}
                                 onChange={handleCountry}
                              >
                                 <option value="">--Please select--</option>
                                 {countryData.map((countryitem, index) => (
                                    <option value={countryitem.id} key={index}>
                                       {countryitem.name}
                                    </option>
                                 ))}
                              </select>
                              {stateData.length === 0 && (
                                 <span className="text-danger error-message">
                                    {errors.countryid?.type === 'required' &&
                                       'Country is requireded'}
                                 </span>
                              )}
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="stateId">
                                 State
                                 <span className="text-danger">*</span>
                              </label>
                              <select
                                 className="form-control"
                                 id="stateId"
                                 name="stateid"
                                 {...register('stateid', {
                                    required: true,
                                 })}
                              >
                                 <option value="">--Please select--</option>
                                 {stateData.map((stateitem, index) => (
                                    <option
                                       value={stateitem.state_id}
                                       key={index}
                                    >
                                       {stateitem.state_name}
                                    </option>
                                 ))}
                              </select>
                              <span className="text-danger error-message">
                                 {errors.stateid?.type === 'required' &&
                                    'State is requireded'}
                              </span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label
                                 className="form-lable"
                                 htmlFor="address1Id"
                              >
                                 Address 1<span className="text-danger">*</span>
                              </label>
                              <textarea
                                 className="form-control"
                                 id="address1Id"
                                 name="address1"
                                 {...register('address1', {
                                    required: true,
                                 })}
                              ></textarea>
                              <span className="text-danger error-message">
                                 {errors.address1?.type === 'required' &&
                                    'Address is requireded'}
                              </span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label
                                 className="form-lable"
                                 htmlFor="address2Id"
                              >
                                 Address 2
                              </label>
                              <textarea
                                 className="form-control"
                                 id="address2Id"
                                 name="address2"
                                 {...register('address2')}
                              ></textarea>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <div className="form-check form-check-inline">
                                 <input
                                    className="form-check-input"
                                    id="checkboxId"
                                    type="checkbox"
                                    name="accept"
                                    value="1"
                                    {...register('checkbox', {
                                       required: true,
                                    })}
                                 />
                                 {!errors.checkbox && (
                                    <label
                                       htmlFor="checkboxId"
                                       className="form-checklable"
                                    >
                                       Accept all conditions
                                    </label>
                                 )}
                                 {errors.checkbox?.type === 'required' && (
                                    <label
                                       htmlFor="checkboxId"
                                       className="form-checklable text-danger"
                                    >
                                       Accept is requireded
                                       <span className="text-danger">*</span>
                                    </label>
                                 )}
                              </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <div className="mb-3">
                              <button
                                 type="submit"
                                 className="btn btn-outline-primary"
                              >
                                 Submit
                              </button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default UserRegistration;
