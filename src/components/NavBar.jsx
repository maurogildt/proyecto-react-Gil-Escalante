import React, { useEffect } from "react";
import CartWidget from "./CartWidget";
import M from "materialize-css";

function NavBar() {
  useEffect(() => {
    const collapsibleElementMobile = document.querySelectorAll('.collapsible');
    const dropdownElementDesktop = document.querySelectorAll('.dropdown-trigger-desktop');
    const sideNavElement = document.querySelectorAll('.sidenav');

    M.Collapsible.init(collapsibleElementMobile, {});
    M.Dropdown.init(dropdownElementDesktop, { coverTrigger: false });
    M.Sidenav.init(sideNavElement, { edge: 'right' });
  }, []);

  return (
    <>
      <ul id="dropdown1" className="dropdown-content purple lighten-5">
        <li><a href="http://localhost:5173/category/bebidas">Bebidas 🥤</a></li>
        <li><a href="http://localhost:5173/category/snacks">Snacks 🍪</a></li>
        <li><a href="http://localhost:5173/category/golosinas">Golosinas 🍬</a></li>
        <li><a href="http://localhost:5173/category/libreria">Librería 📚</a></li>
      </ul>
      <div>
        <nav>
          <div className="nav-wrapper purple lighten-3">
            <a href="#" className="brand-logo left">Kiosco Express ✨</a>
            <ul className="right hide-on-small-only">
              <li><a href="#" className="dropdown-trigger-desktop" data-target="dropdown1">Productos<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Ubicación</a></li>
              <li><CartWidget /></li>
            </ul>
            <div className="right hide-on-med-and-up">
              <ul id="slide-out" className="sidenav purple lighten-4">
                <ul className="collapsible expandable">
                  <li>
                    <div className="collapsible-header">Productos<i className="material-icons right">arrow_drop_down</i></div>
                    <div className="collapsible-body purple lighten-5">
                      <a href="http://localhost:5173/category/bebidas">Bebidas 🥤</a>
                      <a href="http://localhost:5173/category/snacks">Snacks 🍪</a>
                      <a href="http://localhost:5173/category/golosinas">Golosinas 🍬</a>
                      <a href="http://localhost:5173/category/libreria">Librería 📚</a>
                    </div>
                  </li>
                </ul>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Ubicación</a></li>
                <li><CartWidget /></li>
              </ul>
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
