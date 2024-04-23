import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <React.Fragment>
         <nav className="navbar">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <h5>Left menu</h5>
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link to="/" className="nav-link">
                              Home
                           </Link>
                           <Link to="/userlist" className="nav-link">
                              User list
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
      </React.Fragment>
   );
};

export default Header;
