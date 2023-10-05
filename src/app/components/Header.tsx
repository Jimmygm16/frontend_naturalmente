import Image from "next/image";

import logo from '../../sources/natural-plus.svg'

function Header():JSX.Element {
    return (
        <header className="shadow-lg">

            <nav className="utilidad h-20 flex items-center justify-between mx-5">
                <a className="w-1/3 max-w[140px]">
                    <Image src={logo} alt="cargando" width={1} height={1} className="w-48" />
                </a>
                <input type="checkbox" id="menu" className="peer hidden" />
                <label className="bg-open-menu w-5 h-5 cursor-pointer peer-checked:bg-close-menu transition-all z-50  md:hidden">
                </label>
        
                <div className="hidden lg:flex flex-grow justify-center items-center">
                    <ul className="flex justify-center gap-6 font-bold font-mono text-gray-600">
                        <li>
                            <a href="#" id="mision-vision-desktop" >Mision y Vision</a>
                        </li>
                        <li>
                            <a href="#" id="productos-desktop">productos</a>
                        </li>
                        <li>
                            <a href="#" id="contactanos-desktop">contactanos</a>
                        </li>
                    </ul>
                </div>
        
                <div className="fixed inset-0 bg-gradient-to-b from-color1/70 to-white/70 translate-x-full 
                peer-checked:translate-x-0 transition-transform">
                    <ul className="absolute inset-x-0 top-24 p-12 bg-white w-[60%] mx-auto rounded-2xl h-max text-center grid gap-6
                    font-bold font-mono shadow-2xl">
                        <li>
                            <a href="#" id="mision-vision-mobile">Mision y Vision</a>
                        </li>
                        <li>
                            <a href="#" id="productos-mobile">productos</a>
                        </li>
                        <li>
                            <a href="#" id="contactanos-mobile">contactanos</a>
                        </li>
                        <li className="lg:hidden">
                            <a href="#" className="btn shadow-sm shadow-color4/30 mx-auto">Inicio de sesión</a>
                        </li>
                        <li className="lg:hidden">
                            <a href="#" className="btn shadow-sm shadow-color4/30 mx-auto text-center">Registrarse</a>
                        </li>
                    </ul>
                </div>
        
                <div className="hidden lg:flex">
                    <a href="#" className="btn mr-4 ml-2 shadow-sm shadow-color4/30">Inicio de sesión</a>
                    <a href="#" className="btn shadow-sm shadow-color4/30 ">Registrarse</a>
                </div>
        
            </nav>

        </header>
    )
}

export default Header;