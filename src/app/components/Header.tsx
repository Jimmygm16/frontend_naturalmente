"use client";

import Image from "next/image";
import icon from "../../sources/natural-plus.svg";
import Link from "next/link";
import {
  LOGIN_PATH,
  REGISTER_PATH,
  HOME_PATH,
  PRODUCTS_PATH,
  CART_PATH,
  PROFILE_PATH,
} from "../consts";
import { useAuth } from "@/app/Context/AuthContext";
import FaceIcon from "@mui/icons-material/Face";
import { useRouter } from "next/navigation";

function Header(): JSX.Element {
  const { isAuth } = useAuth();
  const router = useRouter();

  // const pathname = usePathname();
  // const isInAuth = pathname == LOGIN_PATH || pathname == REGISTER_PATH;
  return (
    <header className="w-full bg-white shadow-lg border-gray-600">
      <nav className="utilidad max-h-fit py-1.5 flex items-center justify-between">
        <a className="w-1/3 max-w[140px] hover:cursor-pointer">
          <Image
            src={icon}
            alt=""
            width={0}
            height={0}
            className="w-56"
            onClick={() => router.push(HOME_PATH)}
          />
        </a>
        <input type="checkbox" id="menu" className="peer hidden" />
        <label
          htmlFor="menu"
          className="bg-open-menu w-5 h-5 cursor-pointer peer-checked:bg-close-menu transition-all z-50  md:hidden "
        ></label>

        <section className="flex flex-row gap-10">
          <div className="hidden lg:flex flex-grow justify-center items-center">
            <ul className="flex gap-6 font-semibold text-xl font-mono text-gray-600">
              <li>
                <Link href={PRODUCTS_PATH}>Productos</Link>
              </li>
              <li>
                <Link href={CART_PATH}>Carrito</Link>
              </li>
            </ul>
          </div>

          <div className="fixed inset-0 bg-gradient-to-b from-color1/70 to-white/70 translate-x-full peer-checked:translate-x-0 transition-transform">
            <div className="flex flex-col items-center justify-center h-screen">
              <ul className="grid inset-x-0 bg-white w-[85%] px-12 py-6 shadow-2xl mx-auto rounded-2xl text-center gap-4 font-bold">
                <li>
                  <Link href={HOME_PATH}>Principal</Link>
                </li>
                <li>
                  <Link href={PRODUCTS_PATH}>Productos</Link>
                </li>
                <li>
                  <Link href={CART_PATH}>Carrito</Link>
                </li>
                <li className="lg:hidden">
                  <Link href={LOGIN_PATH}>Iniciar sesion</Link>
                </li>
                <li className="lg:hidden">
                  <Link href={REGISTER_PATH}>Registrarse</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex gap-3">
            {isAuth ? (
              <Link
                href={PROFILE_PATH}
                className="btn hover:shadow-sm shadow-color4/30"
              >
                <FaceIcon />
                Perfil
              </Link>
            ) : (
              <>
                <Link
                  href={LOGIN_PATH}
                  className="btn hover:shadow-sm shadow-color4/30"
                >
                  Iniciar sesión
                </Link>
                <Link
                  href={REGISTER_PATH}
                  className="btn hover:shadow-sm shadow-color4/30"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </section>
      </nav>
    </header>
  );
}

export default Header;
