import React from "react";

import logo4 from "../../assets/img/mas.png";

import Publicacion_card from "./publicacion_card";
import { Link } from "react-router-dom";
import "./publicaciones.css";

function Publicacion() {
  return (
    <>
      <div className="publicaciones_">
        <div className="menu">
          <Link to={"/crear"}>
            <a href="" type="button">
              <img src={logo4} alt="Logo" className="menu-icon" />
            </a>
          </Link>

          <nav class="menu_nav" id="nav">
            <span class="nav-item active">
              <span class="icon">
                <i data-feather="home"></i>
              </span>
              <a href="#">Noticias</a>
            </span>
            <span class="nav-item">
              <span class="icon">
                <i data-feather="search"></i>
              </span>
              <a href="#">Avisos</a>
            </span>
            <span class="nav-item">
              <span class="icon">
                <i data-feather="bell"></i>
              </span>
              <a href="#">Eventos</a>
            </span>
            <span class="nav-item">
              <span class="icon">
                <i data-feather="star"></i>
              </span>
              <a href="#">Todos</a>
            </span>
          </nav>
        </div>

        <Link to={"/user_posts"}>
          <Publicacion_card />
          <Publicacion_card />
          <Publicacion_card />
          <Publicacion_card />
          <Publicacion_card />
        </Link>
      </div>
    </>
  );
}

export default Publicacion;
