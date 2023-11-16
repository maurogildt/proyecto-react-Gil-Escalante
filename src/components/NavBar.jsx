import React, { useEffect } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
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
        <li><Link to={`/category/bebidas`}>Bebidas 🥤</Link></li>
        <li><Link to={`/category/snacks`}>Snacks 🍪</Link></li>
        <li><Link to={`/category/golosinas`}>Golosinas 🍬</Link></li>
        <li><Link to={`/category/libreria`}>Librería 📚</Link></li>
      </ul>
      <div>
        <nav>
          <div className="nav-wrapper purple lighten-3">
            <Link to={`/`} className="brand-logo left">Kiosco Express ✨</Link>
            <ul className="right hide-on-small-only">
              <li><a href="#" className="dropdown-trigger-desktop" data-target="dropdown1">Productos<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><Link to={`/contact`}>Contacto</Link></li>
              <li><CartWidget /></li>
            </ul>
            <div className="right hide-on-med-and-up">
              <ul id="slide-out" className="sidenav purple lighten-4">
                <ul className="collapsible expandable">
                  <li>
                    <div className="collapsible-header">Productos<i className="material-icons right">arrow_drop_down</i></div>
                    <div className="collapsible-body purple lighten-5">
                      <Link to={`/category/bebidas`}>Bebidas 🥤</Link>
                      <Link to={`/category/snacks`}>Snacks 🍪</Link>
                      <Link to={`/category/golosinas`}>Golosinas 🍬</Link>
                      <Link to={`/category/libreria`}>Librería 📚</Link>
                    </div>
                  </li>
                </ul>
                <li><Link to={`/contact`}>Contacto</Link></li>
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
