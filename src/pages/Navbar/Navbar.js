import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="p-4 bg-gray-100 text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <p>Logo</p>
          </a>

          <p>Paid Total: 0</p>
          <button className="flex justify-end p-4 md:hidden"></button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
