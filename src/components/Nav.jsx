import React, { useEffect, useState } from "react";
import "../Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <a href="#home">
        <img
          className="nav_logo"
          src="../images/chillflix.png"
          alt="chillflix logo"
        />
      </a>

      <img
        className="nav_avatar"
        src="https://lh3.googleusercontent.com/proxy/UbAK7kp1F_PsvekreqFN7KuLw6Dl1JJJ72eNRKKhpPrx4Whh9sZkYbt6g-rqUP_FMp8cQLzU8I2oQr1NjkRfp875-VFOB0UZ31YdmgM4ozkb9GAg29dAY5rM1qX25-hyLkfC8pZpVJS_kz2Jff2C19MXjk4fEzOUHPtDyosqVdkyILTiaByQ"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
