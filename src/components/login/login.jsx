import logo2 from "../../assets/img/user.png";

import logo3 from "../../assets/img/login.png";
import logo4 from "../../assets/img/google.png";
import logo1 from "../../assets/img/github.png";

import "./login.css";

function Login() {
  return (
    <>
      <div className="padre_login">
        <section className="part1">
          <div className="logo_login">
            <img src={logo2}></img>
          </div>
          <div className="form">
            <form>
              <label> Correo</label>
              <input type="text"></input>
              <label>Contraseña</label>
              <input type="text"></input>
              <nav>
                <div>
                  <input type="radio"></input> <p>recordame </p>
                </div>

                <a href="https://web.whatsapp.com/">
                  ¿olvidaste tu contraseña?
                </a>
              </nav>
              <button type="submit">Entrar</button>
            </form>
          </div>
          <div className="otros">
            <nav className="con">
              <p>o entrar con </p>
            </nav>
            <nav className="button">
              <button>
                <img src={logo4}></img>
                <p>Google</p>
              </button>
              <button>
                <img src={logo1}></img> <p>GitHub</p>
              </button>
            </nav>
          </div>
        </section>
        <div className="part2">

        <img src={logo3} className="logosenati"></img>
        </div>
      </div>
    </>
  );
}
export default Login;
