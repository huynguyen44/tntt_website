/* eslint-disable */
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';

const Header = () => {
  const [ setCategories ] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-400 py-8">
        <div className="md:float-left block">
    
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              <img src='assets/DMU LOGO.png' className='inline-block h-20 mr-4'/>
              Đoàn Đaminh Úy
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">  
          <Link href='/'>
            <a>About Us</a>
          </Link>
          <Link href='/divisions/index'>
            <a>Divisions</a>
          </Link>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
          <Link href='/'>
            <a>Contact Us</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
/* eslint-disable */