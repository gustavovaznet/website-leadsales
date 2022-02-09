//SCROLL TOP

//IMPORTING
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//SCROLL TOP
const ScrollTop = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  //USE EFFECT
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
