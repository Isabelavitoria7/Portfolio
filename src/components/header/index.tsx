"use client"; 
import Link from "next/link";
import {Menu, X } from 'lucide-react'
import {useState} from 'react'

export function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="flex px-2 py-4 bg-[#191919] text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <nav className="flex justify-between items-center w-[92%]  mx-auto">
                    <div>
                        Isabela V.
                    </div>
                    <div className={`md:static absolute md:min-h-fit bg-[#191919] min-h-[40vh] left-0 w-full md:w-auto flex items-center px-5 ${isMenuOpen ? "top-[8%]" : "top-[-100%]"} ease-linear`}
                         
                    >
                        <ul className="flex flex-col md:flex-row md:items-center justify-center md:gap-2 gap-12">
                            <li>
                                <a className="hover:text-gray-300" href="#sobre">Sobre</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-500" href="#projetos">Projetos</a>
                            </li>
                            <li>
                                <Link href='/certificados' className="hover:text-gray-500">
                                    Certificados
                                </Link>
                            </li>
                        </ul>
                    </div>   
                    <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <X/>
                        ) : (
                            <Menu/>
                        )
                        }
                    </div>
                </nav>
            </div>

        </header>
    )


}