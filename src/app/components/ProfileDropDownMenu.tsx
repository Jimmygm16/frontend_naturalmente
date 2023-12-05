import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useAuth } from "../Context/AuthContext";

export default function App() {
  const { logout } = useAuth();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          <Person2Icon sx={{ fontSize: 40 }} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        className="bg-gray-100 px-2 py-1.5 rounded-lg shadow-lg text-xl"
      >
        <DropdownItem
          key="profile"
          textValue="Profile"
          className="flex flex-row items-center font-light hover:text-white hover:bg-color4 outline-none hover:rounded-md hover:transition-colors duration-200"
        >
          <Person2Icon sx={{ fontSize: 35 }} />
          <Link className="px-2" href="/profile">
            Mi perfil
          </Link>
        </DropdownItem>
        <DropdownItem
          key="cart"
          textValue="Cart"
          className="flex flex-row items-center font-light hover:text-white hover:bg-color4 outline-none hover:rounded-md hover:transition-colors duration-200"
        >
          <LocalMallIcon sx={{ fontSize: 35 }} />
          <Link className="px-2" href="/carrito">
            Mi carrito
          </Link>
        </DropdownItem>
        <DropdownItem
          key="buys"
          textValue="Buys"
          className="flex flex-row items-center font-light hover:text-white hover:bg-color4 outline-none hover:rounded-md hover:transition-colors duration-200"
        >
          <LocalOfferIcon sx={{ fontSize: 35 }} />
          <Link className="px-2" href="/">
            Compras
          </Link>
        </DropdownItem>
        <DropdownItem
          key="logout"
          textValue="Logout"
          className="flex flex-row items-center font-light mt-2 border-gray-200 hover:text-white hover:bg-red-500 outline-none hover:rounded-md hover:transition-colors duration-200"
          onClick={logout}
        >
          <LogoutIcon sx={{ fontSize: 35 }} />
          <span className="px-2">Cerrar sesión</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
