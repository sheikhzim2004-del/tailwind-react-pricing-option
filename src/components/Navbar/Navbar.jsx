import React, { useState } from 'react';
import Link from './Link';
import { IoClose, IoMenu } from 'react-icons/io5';



const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Pricing",
    path: "/pricing"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navLinks.map(link => <Link key={link.id} link={link}></Link>)



  return (
    <nav className='container mx-auto flex justify-between items-center  mb-50'>
      <span className='flex space-x-3 items-center' onClick={() => setOpen(!open)}>
        {
          open ?
            <IoClose className='md:hidden'></IoClose> :
            <IoMenu className='md:hidden'></IoMenu>
        }

          <ul className={`md:hidden absolute ${open ? 'top-8' : '-top-96'} bg-amber-200 duration-800`}>
            {links}
          </ul>

        <h3>My Navbar</h3>
      </span>
      <ul className='hidden md:flex'>
        {
          links
        }
      </ul>

      {/* <ul className='flex'>
        {
          navLinks.map(link => <li className='mr-10'>
            <a href={link.path}>
              {link.name}</a>
          </li>)
        }
      </ul> */}

      {/* <ul className='flex'>
        <li className='mr-10'><a href="/">Home</a></li>
        <li className='mr-10'><a href="/about">About</a></li>
        <li className='mr-10'><a href="/blog">Blog</a></li>
        <li className='mr-10'><a href="/contact">Contact</a></li>
      </ul> */}

      <button className='btn btn-accent'>Sign In</button>


    </nav>
  );
};

export default Navbar;