"use client";
import Image from "next/image"
import icon from "../../sources/natural-plus.svg"
import { useRouter } from 'next/navigation'
import { useState } from 'react'; 
import Link from "next/link";


   

function Header( ):JSX.Element {

	const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleClickMini = () => {
        router.push("/registro");
        setIsOpen(false); // Cierra el menú aquí
    }

    const main = () => {
        router.push("/../");
        setIsOpen(false); // Cierra el menú aquí
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Abre o cierra el menú segun convenga
    }
	

 	const contactUs = () => {
		document.getElementById('idContactanos').scrollIntoView({ behavior: 'smooth' });
		setIsOpen(false); 
		
	}  


	 
	

	return (
        <header className="fixed top-0 z-[1] w-full bg-gray-200 shadow border-b-4 border-gray-600 rounded-2xl mb-0">
            <nav className="utilidad h-20 flex items-center justify-between">
                <a className="w-1/3 max-w[140px]">
                    <Image src={icon} alt="" width={0} height={0} className="w-44" />
                </a>
                <input type="checkbox" id="menu" className="peer/hamburguer hidden" checked={isOpen} onChange={toggleMenu} />
				<label htmlFor="menu" className="bg-open-menu w-5 h-5 cursor-pointer peer-checked/hamburguer:bg-close-menu transition-all z-50  md:hidden ">
				</label>
				<div className="hidden lg:flex flex-grow justify-center items-center">
					<ul className="flex gap-6 font-bold font-mono text-gray-600">
						<li>
							<a  id="mision-vision-desktop" className="cursor-pointer" onClick={main}>Mision y Vision</a>
						</li>
						<li>
							<a  id="productos-desktop" className="cursor-pointer" onClick={main}>productos</a>
						</li>
						<li>
							<a  id="contactanos-desktop" className="cursor-pointer" onClick={contactUs}>contactanos</a>
						</li>
					</ul>
				</div>
		
				<div className="fixed inset-0 bg-gradient-to-b from-color1/70 to-white/70 translate-x-full 
				peer-checked/hamburguer:translate-x-0 transition-transform">
					<ul className="absolute inset-x-0 top-24 p-12 bg-white w-[60%] mx-auto rounded-2xl h-max text-center grid gap-6
					font-bold font-mono shadow-2xl">
						<li>
							<a href="#" id="mision-vision-mobile" className="cursor-pointer" onClick={main}>Mision y Vision</a>
						</li>
						<li>
							<a href="#" id="productos-mobile" className="cursor-pointer" onClick={main}>productos</a>
						</li>
						<li>
							<a id="contactanos-mobile" className="cursor-pointer" onClick={contactUs}>contactanos</a>
						</li>
						<li className="lg:hidden">
							<a  className="btn shadow-sm shadow-color4/30 mx-auto">Inicio de sesión</a>
						</li>
						<li className="lg:hidden">
							<a className="btn shadow-sm shadow-color4/30 mx-auto text-center" onClick={handleClickMini}>Registrarse</a>
						</li>
					</ul>
				</div>
		
				<div className="hidden lg:flex">
					<a className="btn mr-4 ml-2 shadow-sm shadow-color4/30">Inicio de sesión</a>
					<Link href="/registro" className="btn shadow-sm shadow-color4/30">Registrarse</Link>
				</div>
		
			</nav>
		</header>
	)
}

export default Header;