import logo2 from "../../assets/img/perrrfil.jpg";
import './Comentarios.css';
import logo3 from "../../assets/img/gegege.jpg";

function Comentarios() {
  return (
    <>
    
      <div className="comentarios-container">
      
        <header>
        
          <div className="top-frame">
            <h2>Publicacion de p4cman jose</h2>
            
            <span className="close-btn">&#10006;</span>
          </div>
          <hr className="divider"/>
          <div className="header-container">
            <div className="profile-info">
              <div className="user-details">
                <img src={logo2} alt="Imagen de pacman jose" />
                <div className="user-name">
                  <h1>p4cman jose</h1>
                  <nav className="nav">
                    <samp>mapap@senati.pe</samp>
                  </nav>
                </div>
              </div>
              <div className="action-buttons">
                <button className="btn noticia">Noticia</button>
                <button className="btn programacion">Programacion</button>
              </div>
              <nav className="nac">30 / 04 / 2024</nav>
            </div>
          </div>
        </header>
        <body>
          <div className="comentario">
            <p>Nuestra imagen personal es una parte esencial de lo que somos. Es una forma de comunicar al mundo quiénes somos y qué pensamos de nosotros mismos. De hecho, es mucho más que nuestro aspecto: nuestra imagen personal también se refiere a cómo nos comportamos y cómo nos desenvolvemos en situaciones sociales.</p>
            <img src={logo3} alt="Imagen de comentario" className="comentario-img" />
            
            <div className="comentario">
              
              <div className="top-framee">
                <h2>COMENTARIOS:</h2>
              </div>
              
            </div>
          </div>
        </body>
        
      </div>
    </>
  );
}

export default Comentarios;