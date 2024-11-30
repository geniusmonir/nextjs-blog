'use client';

// import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLinks = () => {
  // const pathname = usePathname();

  return (
    <nav>
      <div className='w-full h-20 bg-sky-700 sticky top-0'>
        <div className='container mx-auto px-4 h-full'>
          <div className='flex justify-between items-center h-full'>
            <ul className='hidden md:flex gap-x-6 text-white'>
              <li>
                <Link href='/'>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                  <p>Blog</p>
                </Link>
              </li>
              <li>
                <Link href='/about-us'>
                  <p>About Us</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
