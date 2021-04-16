import React from "react";
import * as ReactRedux from "react-redux";
import * as AppRedux from '../../redux';
import logo from "./logo.svg";
import "./index.css";
import {Link} from "react-router-dom";

export const Navbar = () => {
  const dispatch = ReactRedux.useDispatch();

  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  const [isActive, setActive] = React.useState(false);

  React.useEffect(() => {
    if (isActive) {
      window.scrollTo(0, 0);
    }

    const menu = document.getElementById('mobile-menu');
    if (menu) {
      if (isActive) {
        menu.style.height = '100%';
      } else {
        setTimeout(() => {
          menu.style.height = '0';
        }, 320);
      }
    }
  }, [isActive])

  const handleBurgerClick = () => {
    setActive(!isActive)
  }

  // const handleLanguageClick = (lang: 'en' | 'de' | 'ru') => (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   dispatch(AppRedux.SetLanguage(lang));
  // };

  const jumpToContacts = () => {
    setActive(false);
    const el = document.getElementById('contacts');
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <nav id="navigation-bar" className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            width="70px"
            height="70px"
            alt="Osma Group logo"
            className="d-inline-block align-top"
          />
        </a>
        <div className={'navbar-burger' + (isActive ? ' is-active' : '')} onClick={handleBurgerClick}>
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </div>
  

        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" style={{textDecoration: "none"}}>
                <a className="nav-link active" aria-current="page" href="#">
                  {strings.ru["nav-main"]}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" style={{textDecoration: "none"}}>
                <a className="nav-link" href="#">
                  {strings[lang]["nav-about-us"]}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/object-page" style={{textDecoration: "none"}}>
                <a className="nav-link" href="">
                  {strings.ru["nav-projects"]}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" style={{textDecoration: "none"}}>
                <a className="nav-link" href="#">
                  {strings[lang]["nav-news"]}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/career-page" style={{textDecoration: "none"}}>
                <a className="nav-link" href="/">
                  {strings[lang]["nav-career"]}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts-page" style={{textDecoration: "none"}}>
                <a className="nav-link" href="/" style={{color: "white"}}>
                  {strings[lang]["nav-contacts"]}
                </a>
              </Link>
            </li>
          </ul>
        </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <i className="d-flex fas fa-search"></i>
          <ul className="d-flex lang-select">
            <select className="form-select" aria-label="language">
              <option defaultValue="ru">{strings[lang]["nav-lang-ru"]}</option>
              <option value="kg">{strings[lang]["nav-lang-kg"]}</option>
              <option value="en">{strings[lang]["nav-lang-en"]}</option>
            </select>
          </ul>
      </div>
    </nav>
  );
};
