import { useState } from "react";
import Link from "../link/Link";
import { MdMenu } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Profile", path: "/profile" },
    { id: 4, name: "Settings", path: "/settings" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <FaRegWindowClose></FaRegWindowClose> : <MdMenu></MdMenu>}
        {/* <MdMenu className="text-2xl "></MdMenu> */}
      </div>
      <ul className= {`${open? 'top-12' : '-top-60'} md:flex absolute duration-1000 bg-yellow-200 md:static px-6`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
