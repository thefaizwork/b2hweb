import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-800">
      <div className="text-white text-lg font-bold">Game Title</div>
      <nav>
        <ul className="flex gap-6 text-white">
          <li><a href="#">How to Start Playing</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </nav>
      <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">+ Connect</button>
    </header>
  );
};

export default Header;
