import Image from "next/image"

import insta from '../../sources/natural-plus.svg'
import facebook from "src/sources/facebook.svg"
import gamil from "src/sources/gmail.svg"
import twitter from 'src/sources/twiter.svg'

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
                    <Image src={facebook} alt="" width={20} height={20} />
                    <Image src={insta} alt="" width={20} height={20} />
                    <Image src={gamil} alt="" width={20} height={20} />
                    <Image src={twitter} alt="" width={20} height={20} />
                </div>
            </div>
        </footer>
    )

}