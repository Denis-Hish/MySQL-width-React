import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Home from './components/Home';
import UserList from './components/UserList';
import UserRegistration from './components/UserRegistration';
// import Footer from './components/common/Footer';

function App() {
   return (
      <div className='App'>
         <div className='leftside'>
            <Header />
         </div>
         <div className='rightside'>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/userlist' element={<UserList />} />
               <Route path='/userregistration' element={<UserRegistration />} />
            </Routes>
         </div>

         {/* <Footer /> */}
      </div>
   );
}

export default App;
