import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-white text-2xl font-bold">Movie Library</Link>
        <div>
          <Link to="/signin" className="text-white mr-4">Sign In</Link>
          <Link to="/signup" className="text-white">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
