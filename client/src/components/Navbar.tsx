import Link from 'next/link';
import React from 'react';
import CartIcon from './CartIcon';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className='flex justify-between  z-50 w-full px-6 py-4 lg:px-10 bg-gray-300'>
      <Link href={'/'} className='flex items-center gap-1'>
        
        <p className='text-[26px] font-extrabold text-blue-800'>
          In Room Dining
        </p>
      </Link>
      <div className='flex justify-between items-center gap-5'>
        <CartIcon />
      </div>
    </nav>
  );
};

export default Navbar;