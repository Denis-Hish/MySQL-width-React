import React from 'react';
import { useForm } from 'react-hook-form';

const UserRegistration = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const onSubmit = data => {
      console.log(data);
   };

   return (
      <React.Fragment>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h5 className="mt-2">User registration form</h5>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="row">
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="name">
                                 Name <span className="text-danger">*</span>
                              </label>
                              <input
                                 className="form-control"
                                 id="name"
                                 type="text"
                                 {...register('name', {
                                    required: true,
                                 })}
                              />
                              <span className="text-danger">
                                 {errors.name?.type === 'required' &&
                                    'Name is requireded'}
                              </span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="username">
                                 User name{' '}
                                 <span className="text-danger">*</span>
                              </label>
                              <input
                                 className="form-control"
                                 id="username"
                                 type="text"
                                 {...register('username', {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9_]+$/i,
                                 })}
                              />
                              <span className="text-danger">
                                 {errors.username?.type === 'required' &&
                                    'User name is requireded'}
                                 {errors.username?.type === 'pattern' &&
                                    'User name is wrong format'}
                              </span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="email">
                                 E-mail <span className="text-danger">*</span>
                              </label>
                              <input
                                 className="form-control"
                                 id="email"
                                 type="email"
                                 {...register('email', {
                                    required: true,
                                    pattern:
                                       /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                                 })}
                              />
                              <span className="text-danger">
                                 {errors.email?.type === 'required' &&
                                    'E-mail is requireded'}
                                 {errors.email?.type === 'pattern' &&
                                    'Enter valid e-mail'}
                              </span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="password">
                                 Password <span className="text-danger">*</span>
                              </label>
                              <input
                                 className="form-control"
                                 id="password"
                                 type="password"
                                 {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                 })}
                              />
                              <span className="text-danger">
                                 {errors.password?.type === 'required' &&
                                    'Password is requireded'}
                                 {errors.password?.type === 'minLength' &&
                                    'Enter password is less then 6 digits'}
                                 {errors.password?.type === 'maxLength' &&
                                    'Enter password is more then 20 digits'}
                              </span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="phone">
                                 Phone <span className="text-danger">*</span>
                              </label>
                              <input
                                 className="form-control"
                                 id="phone"
                                 type="tel"
                                 name="phone"
                              />
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="gender">
                                 Gender <span className="text-danger">*</span>
                              </label>
                              <select
                                 name="gender"
                                 className="form-control"
                                 id="gender"
                              >
                                 <option value="">--Please select--</option>
                                 <option value="Male">Male</option>
                                 <option value="Female">Female</option>
                                 <option value="Other">Other</option>
                              </select>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="countryid">
                                 Country <span className="text-danger">*</span>
                              </label>
                              <select
                                 name="countryid"
                                 className="form-control"
                                 id="countryid"
                              >
                                 <option value="">--Please select--</option>
                                 <option value="1">Ukraine</option>
                                 <option value="2">Poland</option>
                                 <option value="3">Other</option>
                              </select>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="stateid">
                                 State <span className="text-danger">*</span>
                              </label>
                              <select
                                 name="stateid"
                                 className="form-control"
                                 id="stateid"
                              >
                                 <option value="">--Please select--</option>
                                 <option value="1">Washington</option>
                                 <option value="2">Idaho</option>
                                 <option value="3">Texas</option>
                              </select>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="address1">
                                 Address 1{' '}
                                 <span className="text-danger">*</span>
                              </label>
                              <textarea
                                 className="form-control"
                                 id="address1"
                                 name="address1"
                              ></textarea>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <label className="form-lable" htmlFor="address2">
                                 Address 2
                              </label>
                              <textarea
                                 className="form-control"
                                 id="address2"
                                 name="address2"
                              ></textarea>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="mb-3">
                              <div className="form-check form-check-inline">
                                 <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                    value="1"
                                    className="form-check-input"
                                 />
                                 <label
                                    htmlFor="checkbox"
                                    className="form-checklable"
                                 >
                                    Accept all conditions{' '}
                                    <span className="text-danger">*</span>
                                 </label>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <div className="mb-3">
                              <label className="form-lable"></label>
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
