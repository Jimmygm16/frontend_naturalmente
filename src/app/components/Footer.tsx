'use client'

import { usePathname } from "next/navigation"
import { Image } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";

export default function Footer(): JSX.Element {
    
    const pathname = usePathname();
    const isInAuth = pathname === '/login' || pathname === '/registro';

    // Usar una declaración condicional para renderizar el componente solo si isInAuth es falso
    if (!isInAuth) {
        return (
            <footer className="bg-gray-200 py-8 mt-4 border-t-4 border-grayDark divide-solid">
                <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Contáctanos</h2>
                        <p>Dirección: Calle Principal 123, Ciudad</p>
                    </div>
            
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Legales</h2>
                        <ul>
                            <li><a>Documentos legales</a></li>
                            <li><a href="#">Condiciones de uso</a></li>
                        </ul>
                    </div>
            
                    <div className="flex space-x-4">
                        <a href="#" className="text-xl"><Instagram/></a>
                        <a href="#" className="text-xl"><Facebook/></a>
                        <a href="#" className="text-xl"><Twitter/></a>
                    </div>
                </div>
            </footer>
        );
    }

    // Si isInAuth es verdadero, no se muestra el componente
    return <></>;
}
