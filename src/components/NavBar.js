import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (<nav>
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#projects">projects</a>

    {/* Make sure each <a> element also gets a unique key prop. */}

  </nav>
  )
}

export default NavBar;
