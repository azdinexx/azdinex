'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
  const [active, setActive] = useState('Home');
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === '/') setActive('Home');
    else if (pathname === '/about') setActive('About');
    else if (pathname === '/services') setActive('Services');
    else if (pathname === '/projects') setActive('Projects');
    else if (pathname === '/contact') setActive('Contact Us');
  }, [pathname]);
  return (
    <header className='flex justify-center md:justify-between items-center py-2 mb-3 flex-wrap gap-2 '>
      <ul className=' gap-2 flex '>
        <Li title='Home' href='/' active={active === 'Home'} />
        <Li title='About' href='/about' active={active === 'About'} />
        <Li title='Services' href='/services' active={active === 'Services'} />
      </ul>
      <div className='bg-gray-100  px-2 rounded-full'>
        <Image width={160} height={40} src='/azdinex.svg' alt='AzdineX' />
      </div>
      <ul className='flex gap-2'>
        <Li title='Projects' href='/projects' active={active === 'Projects'} />
        <Li
          title='Contact Us'
          href='/contact'
          active={active === 'Contact Us'}
        />
      </ul>
    </header>
  );
}

export default Header;

function Li({
  title,
  href,
  active,
}: {
  title: string;
  href: string;
  active?: boolean;
}) {
  if (href === '/contact')
    return (
      <li className='bg-white border-gray-300 border-2  rounded-full flex'>
        <Link className='flex-grow  py-1 px-2 flex gap-1' href={href}>
          {title}
          {active ? (
            <div className='bg-green-400 w-2 h-2 rounded-full mr-1 mt-1'></div>
          ) : (
            <div className='bg-gray-200  w-2 h-2 rounded-full mr-1 mt-1'></div>
          )}
        </Link>
      </li>
    );
  return (
    <li className='bg-gray-100 rounded-full flex'>
      <Link className='flex-grow  py-1 px-2  flex gap-1 ' href={href}>
        {title}
        {active ? (
          <div className='bg-green-400 w-2 h-2 rounded-full mr-1 mt-1'></div>
        ) : (
          <div className='bg-gray-200  w-2 h-2 rounded-full mr-1 mt-1'></div>
        )}
      </Link>
    </li>
  );
}
