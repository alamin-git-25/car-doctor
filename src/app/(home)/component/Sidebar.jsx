"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import React from 'react';

const Sidebar = () => {
 
const pathname = usePathname();

  const link = [
    {
      name: 'Engine Oil Change', path: '/serviceDetails/66d5d1abd0d86c3e088a211d', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    },
    {
      name: 'Battery Charge', path: '/serviceDetails/66d5d1abd0d86c3e088a211e', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    },
    {
      name: 'Full car Repair', path: '/serviceDetails/66d5d1abd0d86c3e088a211f', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    },
    {
      name: 'Engine Repair', path: '/serviceDetails/66d5d1abd0d86c3e088a2120', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    },
    {
      name: 'Automatic Services', path: '/serviceDetails/66d5d1abd0d86c3e088a2121', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    },
    {
      name: 'Electrical System', path: '/serviceDetails/66d5d1abd0d86c3e088a2122', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    },
  ]


  return (
    <div>
      <aside
        id="nav-menu-1"
        aria-label="Side navigation"
        className='  bg-[#D9D9D9] rounded-lg'

      >

        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
           
              {
                link.map((l, idx) => {
                  const isActive = pathname.startsWith(l.path);
                  return (
                    <li key={idx} className='px-8 my-2'>
                 
                  <Link href={l.path}
                   className={isActive ? 'flex gap-3 rounded p-3 text-slate-100 transition-colors hover:bg-emerald-600 bg-primary' : 'flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-600'}>
                  <span className='flex justify-between w-full'>{l.name}{l.icon}</span>
                  </Link>
                </li>
                  );
                })
              }

            </ul>
          </div>
        </nav>
      </aside>

    </div>
  );
};

export default Sidebar;