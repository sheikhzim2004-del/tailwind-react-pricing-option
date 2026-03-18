import React from 'react';
import Link from './Link';


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
  return (
    <nav>

      <ul className='flex'>
        {
          navLinks.map(link => <Link key={link.id} link={link}></Link>)
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
    </nav>
  );
};

export default Navbar;