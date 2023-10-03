import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar1 from "../../components/NavBar/NavBar1";

export default function HomeNavBar() {
  const location = useLocation();
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setdisplay(true);
        break;
      default:
        setdisplay(false);
        break;
    }
  }, [location.pathname]);

  return display ? <NavBar1 /> : <Outlet />;
}
