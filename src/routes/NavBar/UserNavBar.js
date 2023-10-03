import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar2 from "../../components/NavBar/NavBar2";

export default function UserNavBar() {
  const [display, setdisplay] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/about":
      case "/services":
      case "/contact":
      case "/cart":
      case "/shop":
      case "/log-in":
      case "/sign-up":
      case "/profile":
      case "/orders":
      case "/shop/:id":
        setdisplay(true);
        break;
      default:
        setdisplay(false);
        break;
    }
  }, [location.pathname]);

  return display ? <NavBar2 /> : <Outlet />;
}
