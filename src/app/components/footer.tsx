import Image from "next/image"
import instagram from "../../sources/instagram.svg"
import facebook from "../../sources/facebook.svg"
import gmail from "../../sources/gmail.svg"
import twiter from "../../sources/twiter.svg"
export default function Footer(): JSX.Element {

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
                    <Image src={instagram} alt="" width={20} height={20} className="w-6 h-6" />
                    <Image src={facebook} alt="" width={20} height={20} className="w-6 h-6" />
                    <Image src={gmail} alt="" width={20} height={20} className="w-6 h-6" />
                    <Image src={twiter} alt="" width={20} height={20} className="w-6 h-6" />
                </div>
            </div>
        </footer>
    )

}