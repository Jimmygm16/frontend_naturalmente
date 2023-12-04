import Image from "next/image";
import group from "../sources/group.jpg";
function LandingPage() {
  return (
    <>
      <main className="bg-slate-100 pb-6 pt-32">
        <section>
          <h1 className="font-bold text-6xl text-center text-grayDark">
            ¿Quienes somos?
          </h1>
          <ul className="grid content-center mt-14  bg-white bg-opacity-60 border border-gray-300 border-opacity-60 shadow-lg rounded-3xl p-4 w-[70%] mx-auto">
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                unde? Molestiae impedit hic eaque. Dolorum, provident dolores
                illo est aut accusantium obcaecati a vero suscipit quod quo
                recusandae quasi sequi quam blanditiis fugit maxime ipsa
                deleniti doloremque temporibus ut. Laudantium suscipit ex, ipsum
                atque facilis rerum assumenda iure minus eligendi deserunt ipsa!
                Vitae corrupti voluptas adipisci sunt dignissimos quod, minima
                omnis consequuntur corporis, maiores, perferendis dicta
                distinctio! Corporis, laborum facilis aspernatur minus
                temporibus itaque sint quasi officiis neque labore? Tempora
                architecto, consequuntur nemo aperiam exercitationem commodi
                itaque impedit accusantium, cumque officia ab corrupti facere
                cum. Voluptatibus omnis aliquid laudantium modi?
              </p>
            </li>
            <li>
              <Image
                src={group}
                alt=""
                width={0}
                height={0}
                className="rounded-3xl object-cover w-64 mx-auto shadow-lg mt-6"
              />
            </li>
          </ul>
        </section>
        <section className="border-2 border-color4 p-3 mx-auto w-8/12 h-auto mt-32 cursor-default mb-14">
          <h1 className="text-4xl font-bold text-color4 mb-4 text-center">
            {" "}
            Servicios.
          </h1>
          <span className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipiscing elit netus
            placerat, erat nostra augue fames arcu nibh odio cras, taciti mus
            sollicitudin ante at semper torquent id. Hac odio semper luctus
            gravida condimentum eros nibh, venenatis libero aptent hendrerit ac
            lectus, quis magna mattis ultricies penatibus turpis. Urna massa
            himenaeos ornare metus dictum at tortor praesent nisl, eget feugiat
            ante viverra etiam odio aliquet egestas auctor facilisi, mattis nam
            diam rutrum dis dictumst pretium sagittis.
          </span>
          <details className="bg-color4 mt-8 open:bg-color3 duration-1000 ">
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
              Nuestros servicios
            </summary>
            <div className="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
              <ul>
                <li className="mt-3 mb-3">
                  <span className="font-bold text-color3 cursor-pointer">
                    Venta de productos naturales:
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit netus
                    placerat, erat nostra augue fames arcu nibh odio cras,
                    taciti mus sollicitudin ante at semper torquent id. Hac odio
                    semper luctus gravida condimentum eros nibh, venenatis
                    libero aptent hendrerit ac lectus, quis magna mattis
                    ultricies penatibus turpis. Urna massa himenaeos ornare
                    metus dictum at tortor praesent nisl, eget feugiat ante
                    viverra etiam odio aliquet egestas auctor facilisi, mattis
                    nam diam rutrum dis dictumst pretium sagittis.
                  </span>
                </li>
                <li className="mb-3">
                  <span className="font-bold text-color3 cursor-pointer">
                    Información de cálidad:
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit netus
                    placerat, erat nostra augue fames arcu nibh odio cras,
                    taciti mus sollicitudin ante at semper torquent id. Hac odio
                    semper luctus gravida condimentum eros nibh, venenatis
                    libero aptent hendrerit ac lectus, quis magna mattis
                    ultricies penatibus turpis. Urna massa himenaeos ornare
                    metus dictum at tortor praesent nisl, eget feugiat ante
                    viverra etiam odio aliquet egestas auctor facilisi, mattis
                    nam diam rutrum dis dictumst pretium sagittis.
                  </span>
                </li>
                <li>
                  <span className="font-bold text-color3 cursor-pointer">
                    Asesoría gratuita:
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit netus
                    placerat, erat nostra augue fames arcu nibh odio cras,
                    taciti mus sollicitudin ante at semper torquent id. Hac odio
                    semper luctus gravida condimentum eros nibh, venenatis
                    libero aptent hendrerit ac lectus, quis magna mattis
                    ultricies penatibus turpis. Urna massa himenaeos ornare
                    metus dictum at tortor praesent nisl, eget feugiat ante
                    viverra etiam odio aliquet egestas auctor facilisi, mattis
                    nam diam rutrum dis dictumst pretium sagittis.
                  </span>
                </li>
              </ul>
            </div>
          </details>
        </section>
      </main>
    </>
  );
}
export default LandingPage;
