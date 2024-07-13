import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-blue-600 text-white p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">My Portfolio</h1>
            <button onClick={toggleMenu} className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className={`mt-4 md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
            <Link to="/about" className="block md:inline-block mr-4">About</Link>
            <Link to="/projects" className="block md:inline-block mr-4">Projects</Link>
            <Link to="/skills" className="block md:inline-block mr-4">Skills</Link>
            <Link to="/testimonials" className="block md:inline-block mr-4">Testimonials</Link>
            <Link to="/contact" className="block md:inline-block">Contact</Link>
          </div>
        </nav>
      );
}
