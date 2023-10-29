
"use client";
import Image from "next/image"
import icon from "../../sources/natural-plus.svg"
function Header():JSX.Element {
	return (
		<header className="fixed top-0 z-20 w-full bg-white shadow border-b-4 border-gray-600">
			<nav className="utilidad h-20 flex items-center justify-between">
				<a className="w-1/3 max-w[140px]">
				<Image src={icon} alt="" width={56} height={56}/>
				</a>
				<input type="checkbox" id="menu" className="peer hidden" />
				<label htmlFor="menu" className="bg-open-menu w-5 h-5 cursor-pointer peer-checked:bg-close-menu transition-all z-50  md:hidden ">
				</label>
				<div className="hidden lg:flex flex-grow justify-center items-center">
					<ul className="flex gap-6 font-bold font-mono text-gray-600">
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