import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		 <nav style={{position: 'stiky'}}>
		    <div className="nav-wrapper">
		      <Link to="/" className="brand-logo">L'o'GO</Link>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <li><Link to="/">home</Link></li>
		      </ul>
		    </div>
		 </nav>
	)
}

export default Navbar;