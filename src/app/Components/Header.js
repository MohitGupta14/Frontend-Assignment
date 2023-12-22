import React from 'react';

const Header = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-white text-2xl font-bold">Formify</a>
      </div>
    </nav>
  );
};

export default Header;
