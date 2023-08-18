import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <article className="article">
        <h1 className="text-center">Habilidades Técnicas</h1>
        <div className="card-group">
          <div className="card">
            <img
              id="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              className="card-img-top"
              alt="react"
            />
            <div className="card-body">
              <h5 className="card-title">React</h5>
            </div>
          </div>
          <div className="card">
            <img
              id="img"
              src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png"
              className="card-img-top"
              alt="MongoDB"
            />
            <div className="card-body">
              <h5 className="card-title">Mongo DB</h5>
            </div>
          </div>
          <div className="card">
            <img
              id="img"
              src="data:image/png;base64,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"
              className="card-img-top"
              alt="Javascript"
            />
            <div className="card-body">
              <h5 className="card-title">Javascript</h5>
            </div>
          </div>

          <div className="card-group">
            <div className="card">
              <img
                id="img"
                src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
                className="card-img-top"
                alt="CSS"
              />
              <div className="card-body">
                <h5 className="card-title">CSS</h5>
              </div>
            </div>
            <div className="card">
              <img
                id="img"
                src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
                className="card-img-top"
                alt="Node JS"
              />
              <div className="card-body">
                <h5 className="card-title">Node JS</h5>
              </div>
            </div>
            <div className="card">
              <img
                id="img"
                src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
                className="card-img-top"
                alt="HTML"
              />
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default AboutPage;
