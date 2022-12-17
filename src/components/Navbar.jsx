import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg  navbar">
    <div class="container-fluid ">
      <a class="navbar-brand index" href="../">The Stoic berserker</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto ">
          <li class="nav-item milink">
            <Link to ="productos"class="nav-link active " aria-current="page">Planes de Entrenamiento</Link>
          </li>
          <li class="nav-item milink">
            <Link to="Formulario" class="nav-link active " aria-current="page">Formulario</Link>
          </li>
          <li class="nav-item milink">
            <a class="nav-link active " aria-current="page"href="../contacto">contacto</a>
          </li>
          <li class="nav-item dropdown milink">
            <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mas opciones
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item dropitem milink" href="../articulos">Articulos</a></li>
              <li><a class="dropdown-item dropitem milink" href="#">Bibliografias</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button class="btn" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
     );
}

export default Navbar;