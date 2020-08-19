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
        src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
