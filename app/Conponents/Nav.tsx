
"use client"


import  { useState } from 'react';
import Link from 'next/link';

        export default function NavBar() {
        
         const [isOpen, setIsOpen] = useState(false);
        

       
         return (
          <main className="flex items-center justify-between flex-wrap p-2  bg-gray-700 ">
          <div className="flex items-center flex-shrink-0 text-white mr-17 lg:mr-36">
                    <img src="/Logo1.jpg" className="w-100 h-100 mr-2  rounded-full border-white-800 " width={55} height={55}  alt="Logo" />
                    </div> 
     
                  <div className=' text-lg font-bold text-gray-200'> SHAHEED NASRULLAH GADANI ACADEMY</div>
     
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          
     
          <nav className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
                    <ul className="absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out text-gray-200 bg-gray-700 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-end gap-x-4">
                   <li className="block lg:inline-block lg:mt-0 text-white-200  hover:font-bold"> <Link href="/" >Home </Link></li>
                   <li className="block  lg:inline-block lg:mt-0 text-white-200  hover:font-bold">  <Link href="/Apply"> Apply </Link></li>
                   <li className="block  lg:inline-block lg:mt-0 text-white-200  hover:font-bold"> <Link href="/Result" > Result </Link></li>
                  
                   <li className="block  lg:inline-block lg:mt-0 text-white-200  hover:font-bold"><Link href="/About"> About </Link></li>
     
                    </ul>
       
                  </nav>
     
     
        </main>
           
         );
        }
      