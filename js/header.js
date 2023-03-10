class HeaderComponent extends HTMLElement {
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    render() {
      // Método que genera el código HTML del componente
      this.shadowRoot.innerHTML = `
      <style>
        /* Estilos del componente */
        header {
          display: flex;
          font-size: 1rem;
          justify-content: center;
          left: 0; /* Posicionamos la cabecera al lado izquierdo */
          position: fixed; /* Hacemos que la cabecera tenga una posición fija */
          top: 0; /* Posicionamos la cabecera pegada arriba */
          text-transform: uppercase;
          width: 100%; /* hacemos que la cabecera ocupe el ancho completo de la página */
          align-items: center;
          background-color: rgba(255, 255, 255, 0.5); /* 50% de opacidad */
          height: 10vh;
          z-index:1;
        }
        
        .header-icon {
          padding-right: 100px;
          width:10%%;
          height:80%;
        }
        .header-icon img{
          height:100%;
          width:100%;
        }
        
        nav .nav-list ul {
          display: flex;
          flex-wrap: wrap;
          gap: 1em;
          justify-content: center;
          list-style:none;
        }
        
        nav .nav-list ul li {
          color: #090707;
        }
        nav .nav-list ul li a {
          color: #000000;
          font-weight: bold;
          text-decoration:none;
        }
        nav .nav-list ul li a:hover{
          color:#fff;
          
        }
        .nav-button {
          padding: 30px;
          
        }
        .nav-button button {
          background-color: rgba(0, 247, 41, 0.7);
          border-radius: 30px;
          border: none;
          color: #121212;
          font-size: 1em;
          font-weight: bold;
          text-transform: uppercase;
          padding: 0.6em 0.6em;
          cursor: pointer;
        }
        .nav-button button:hover {
          background-color: #121212;
          color: #fff;
          transition:.6s ease-out;
        }
      </style>
      <header>
        <div class="header-icon">
            <picture class="logo">
                <a href="#"><img src="/img/logo2.png" alt="Logo de la Web" /></a>
            </picture>
        </div>
        <nav>
            <div class="nav-list">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Pages</a></li>
                </ul>
            </div>
        </nav>
        <div class="nav-button">
            <button>Buy it now</button>
        </div>
      </header>
    `;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    // Método que se ejecuta cuando el componente se elimina del DOM
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Método que se ejecuta cuando se cambia un atributo del componente
  }

  static get observedAttributes() {
    return ["attribute1", "attribute2"];
  }

  set attribute1(value) {
    // Método que se ejecuta cuando se cambia el valor del atributo attribute1
  }

  set attribute2(value) {
    // Método que se ejecuta cuando se cambia el valor del atributo attribute2
  }
  
    
}
  
customElements.define("header-component", HeaderComponent);
