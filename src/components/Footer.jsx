import React from "react";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.jpg";
import twitter from "../assets/twitter.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="container">
        <main className="col">
          <article className="row">
            <div className="imagesGroup">
              <a href="https://www.facebook.com/yumerlisp.guedezr/">
                <i className="fa fa-facebook" />
                <img className="imgfooter" src={facebook} alt="logofacebook" />
              </a>
              <a href="https://www.instagram.com/yumerlisguedez/">
                <i className="fa fa-instagram" />
                <img
                  className="imgfooter"
                  src={instagram}
                  alt="logoinstagram"
                />
              </a>
              <a href="https://twitter.com/csyumerlis111">
                <i className="fa fa-twitter" />
                <img className="imgfooter" src={twitter} alt="logotwitter" />
              </a>
              <a href="https://github.com/yumeguedez">
                <i className="fa fa-github" />
                <img className="imgfooter" src={github} alt="logohithub" />
              </a>
            </div>
            <table className="table-footer gap-0 row-gap-3">
              <thead className="thead" style={{ color: "gray" }}>
                <tr>
                  <td className="fw-semibold">Dirección</td>
                  <td className="fst-italic">Bogota D.C. - Colombia</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Correo</td>
                  <td className="fst-italic">yumerlis.guedez@gmail.com</td>
                </tr>
              </thead>
              <tbody className="tbody" style={{ color: "gray" }}>
                <tr>
                  <td className="fw-semibold">Teléfonos</td>
                  <td className="fst-italic">3154685754 - 601 7022433</td>
                </tr>
              </tbody>
            </table>
          </article>
        </main>
      </footer>
    </>
  );
};

export default Footer;
