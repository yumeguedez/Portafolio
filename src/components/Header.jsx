import { NavLink } from "react-router-dom";
import Perfil from "../assets/Perfil.jpeg";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <main className="container">
        <article>
          <div className="d-flex align-items-center perfil1">
            <div className="flex-shrink-0">
              <img id="img" src={Perfil} alt="Yumerlis" />
            </div>
            <div className="row">
              <div className="col">
                <h3>Yumerlis Patricia Guedez Rodriguez</h3> <h4>29 años</h4>{" "}
                <h5>Coordinadora Comercial de AQ CERTIFICATION SAS</h5>
                <h5>Profesora de Esgrima</h5>
                <h2>Desarrolladora Web Full Stack</h2>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Header;
