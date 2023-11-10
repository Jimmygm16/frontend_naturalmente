
"use client"
import { use, useState } from 'react';
export default function ProductPage(): JSX.Element {
        
    const [open, setOpen] = useState(false);

        return (
            <nav className="flex items-center justify-between p-6 bg-blue-500 ">
                <div className="flex items-center">
                    <a href="#" className="text-white text-2xl lg:text-3xl font-bold">Logo</a>
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setOpen(!open)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
                        </svg>
                    </button>
                </div>

                <div className={`${open ? '' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Docs
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Examples
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                            Blog
                        </a>
                    </div>
                </div>
            </nav>
        );

    }