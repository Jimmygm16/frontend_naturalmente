import Image from "next/image"
import group from "../sources/group.jpg"
import p1 from "../sources/product1.jpg"
import p2 from "../sources/product2.jpg"
import p3 from "../sources/product3.jpg"
import p4 from "../sources/product4.jpg"
function LandingPage() {

    return (
       <>
         <main>
            <section className="mt-5" >
                <h1 className="font-bold text-6xl text-center text-grayDark">¿Quienes somos?</h1>
                <ul className="grid content-center mt-14  bg-white bg-opacity-60 border border-gray-300 border-opacity-60 shadow-lg rounded-3xl p-4 w-[70%] mx-auto">
                    <li>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, unde? Molestiae impedit hic eaque. Dolorum, provident dolores illo est aut accusantium obcaecati a vero suscipit quod quo recusandae quasi sequi quam blanditiis fugit maxime ipsa deleniti doloremque temporibus ut. Laudantium suscipit ex, ipsum atque facilis rerum assumenda iure minus eligendi deserunt ipsa! Vitae corrupti voluptas adipisci sunt dignissimos quod, minima omnis consequuntur corporis, maiores, perferendis dicta distinctio! Corporis, laborum facilis aspernatur minus temporibus itaque sint quasi officiis neque labore? Tempora architecto, consequuntur nemo aperiam exercitationem commodi itaque impedit accusantium, cumque officia ab corrupti facere cum. Voluptatibus omnis aliquid laudantium modi?</p>
                    </li>
                    <li >
                        <Image src={group} alt="" width={0} height={0} className="rounded-3xl w-64 mx-auto shadow-lg mt-6" />
                    </li>
                </ul>
            </section>
            <section className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
                <div className="producto p-6 shadow-lg rounded-full">
                    <Image src={p1} alt="" width={0} height={0} className="producto-imagen object-cover w-full h-64 rounded-full" />
                    <div className="text-center">
                        <h2 className="producto-titulo text-xl font-bold mt-4">Título del producto</h2>
                        <p className="producto-descripcion text-base mt-2">Descripción del producto</p>
                        <p className="producto-categoria text-sm text-gray-500 mt-1">Categoría del producto</p>
                    </div>
                </div>
                <div className="producto p-6 shadow-lg rounded-full">
                <Image src={p2} alt="" width={0} height={0} className="producto-imagen object-cover w-full h-64 rounded-full" />
                    <div className="text-center">
                        <h2 className="producto-titulo text-xl font-bold mt-4">Título del producto</h2>
                        <p className="producto-descripcion text-base mt-2">Descripción del producto</p>
                        <p className="producto-categoria text-sm text-gray-500 mt-1">Categoría del producto</p>

                    </div>
                </div>
                <div className="producto p-6 shadow-lg rounded-full">
                    <Image src={p3} alt="" width={0} height={0} className="producto-imagen object-cover w-full h-64 rounded-full" />
                    <div className="text-center">
                        <h2 className="producto-titulo text-xl font-bold mt-4">Título del producto</h2>
                        <p className="producto-descripcion text-base mt-2">Descripción del producto</p>
                        <p className="producto-categoria text-sm text-gray-500 mt-1">Categoría del producto</p>

                    </div>
                </div>
                <div className="producto p-6 shadow-lg rounded-full">
                    <Image src={p4} alt="" width={0} height={0} className="producto-imagen object-cover w-full h-64 rounded-full" />
                    <div className="text-center">
                        <h2 className="producto-titulo text-xl font-bold mt-4">Título del producto</h2>
                        <p className="producto-descripcion text-base mt-2">Descripción del producto</p>
                        <p className="producto-categoria text-sm text-gray-500 mt-1">Categoría del producto</p>
                    </div>
                </div>
                <div className="producto p-6 shadow-lg rounded-full">
                    <Image src={p1} alt="" width={0} height={0} className="producto-imagen object-cover w-full h-64 rounded-full" />
                    <div className="text-center">
                        <h2 className="producto-titulo text-xl font-bold mt-4">Título del producto</h2>
                        <p className="producto-descripcion text-base mt-2">Descripción del producto</p>
                        <p className="producto-categoria text-sm text-gray-500 mt-1">Categoría del producto</p>

                    </div>
                </div>
                <div className="producto p-6 shadow-lg rounded-full">
                    <Image src={p2} alt="" width={0} height={0} className="producto-imagen object-cover w-full h-64 rounded-full" />
                    <div className="text-center">
                        <h2 className="producto-titulo text-xl font-bold mt-4">Título del producto</h2>
                        <p className="producto-descripcion text-base mt-2">Descripción del producto</p>
                        <p className="producto-categoria text-sm text-gray-500 mt-1">Categoría del producto</p>

                    </div>
                </div>
            </section>
          </main>
       </>
    )

}
export default LandingPage;