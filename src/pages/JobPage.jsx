import React from "react";
import "./JobPage.css";

const JobPage = () => {
  return (
    <>
      <main className="row">
        <article className="col">
          <h1 className="text-center">Proyectos Realizados</h1>
          <div>
            <div id="iframe" className="card mb-3">
              <iframe
                src="https://yumeguedez.github.io/Proyecto-1-Landing-de-Venta/"
                className="card-img-top"
                alt="Proyecto 1"
              />
              <div className="card-body">
                <h5 className="card-title">Proyecto 1</h5>
                <p className="card-text">Landing de Venta</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Se utilizó HTML, CSS
                  </small>
                </p>
              </div>
            </div>
            <div id="iframe" className="card">
              <iframe
                src="https://yumeguedez.github.io/Proyecto-2-Aplicacion-CRUD/"
                className="card-img-bottom"
                alt="Proyecto 2"
              />
              <div className="card-body">
                <h5 className="card-title">Proyecto 2</h5>
                <p className="card-text">Aplicación CRUD</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Se utilizó HTML, CSS, JAVASCRIPT, Metodo HTTP get, post,
                    put, delete
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div id="iframe" className="card mb-3">
              <iframe
                src="https://oh-wilks.github.io/pr3/"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Proyecto 3</h5>
                <p className="card-text">Dashboard APP</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Se utilizó HTML, CSS, JAVASCRIPT, Chart.js, axios,
                    Modularización, async-await, API pública
                  </small>
                </p>
              </div>
            </div>
            <div id="iframe" className="card">
              <iframe
                src="https://roaring-dango-0d6411.netlify.app/"
                className="card-img-bottom"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Proyecto 4</h5>
                <p className="card-text">Restaurant App</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Se utilizó React, hooks, props, firebase, useState
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div id="iframe" className="card mb-3">
              <iframe
                src="https://coruscating-gnome-8e826d.netlify.app/"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Proyecto 5</h5>
                <p className="card-text">Aplicación de Comercio Electronico</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {" "}
                    Se utilizó ReactJS, Context API, Router, ExpressJS, MongoDB,
                    Middleware
                  </small>
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default JobPage;
