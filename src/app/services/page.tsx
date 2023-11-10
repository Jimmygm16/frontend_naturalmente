import 'tailwindcss/tailwind.css';  
export default function Services(){
    return(
<section className="border-4 border-green-800 p-3 mx-auto w-8/12 h-auto mt-32 cursor-default mb-14">
  <h1 className='text-4xl font-bold text-green-800 mb-2 text-center'> Servicios.</h1>
  <span className="">
  Lorem ipsum dolor sit amet consectetur adipiscing elit netus placerat, erat nostra augue
  fames arcu nibh odio cras, taciti mus sollicitudin ante at semper torquent id.
  Hac odio semper luctus gravida condimentum eros nibh, venenatis libero aptent hendrerit
  ac lectus, quis magna mattis ultricies penatibus turpis. Urna massa himenaeos 
  ornare metus dictum at tortor praesent nisl, eget feugiat ante viverra etiam odio
  aliquet egestas auctor facilisi, mattis nam diam rutrum dis dictumst pretium sagittis.
  </span>
  <details className="bg-gray-300 open:bg-lime-200 duration-1000">
    <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">Nuestros servicios</summary>
    <div className="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
      <ul>
        <li className="mt-3 mb-3">
          <span className="font-bold text-green-800 cursor-pointer">
          Venta de productos naturales: 
          </span>
          <span>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus placerat, erat nostra augue
          fames arcu nibh odio cras, taciti mus sollicitudin ante at semper torquent id.
          Hac odio semper luctus gravida condimentum eros nibh, venenatis libero aptent hendrerit
          ac lectus, quis magna mattis ultricies penatibus turpis. Urna massa himenaeos 
          ornare metus dictum at tortor praesent nisl, eget feugiat ante viverra etiam odio
          aliquet egestas auctor facilisi, mattis nam diam rutrum dis dictumst pretium sagittis.
          </span>
        </li>
        <li className="mb-3">
          <span className="font-bold text-green-800 cursor-pointer">
          Información de cálidad: 
          </span>
          <span>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus placerat, erat nostra augue
          fames arcu nibh odio cras, taciti mus sollicitudin ante at semper torquent id.
          Hac odio semper luctus gravida condimentum eros nibh, venenatis libero aptent hendrerit
          ac lectus, quis magna mattis ultricies penatibus turpis. Urna massa himenaeos 
          ornare metus dictum at tortor praesent nisl, eget feugiat ante viverra etiam odio
          aliquet egestas auctor facilisi, mattis nam diam rutrum dis dictumst pretium sagittis.
          </span>
        </li>
        <li>
          <span className="font-bold text-green-800 cursor-pointer">
          Asesoría gratuita:
          </span>
          <span>
          Lorem ipsum dolor sit amet consectetur adipiscing elit netus placerat, erat nostra augue
          fames arcu nibh odio cras, taciti mus sollicitudin ante at semper torquent id.
          Hac odio semper luctus gravida condimentum eros nibh, venenatis libero aptent hendrerit
          ac lectus, quis magna mattis ultricies penatibus turpis. Urna massa himenaeos 
          ornare metus dictum at tortor praesent nisl, eget feugiat ante viverra etiam odio
          aliquet egestas auctor facilisi, mattis nam diam rutrum dis dictumst pretium sagittis.
          </span>
        </li>
      </ul>
    </div>
  </details>
</section>

    );
}