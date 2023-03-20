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
          align-items: center;
          background-color: rgba(255, 255, 255, 0.5); /* 50% de opacidad */
          display: flex;
          height: 10vh;
          justify-content: space-around;
          padding: 0 10%;
          position: fixed; /* Hacemos que la cabecera tenga una posición fija */
          width: 80%; /* hacemos que la cabecera ocupe el ancho completo de la página */
          z-index:1;
          
        }
        .header-icon {
          height:100%;
          width:20%;
        }
        .header-icon img{
          height:100%;
          width:100%;
        }
        
        nav .nav-list ul {
          display: flex;
          gap: 1em;
          list-style:none;
          margin: 0;
          padding: 0;
        }
        
        nav .nav-list ul li a {
          color: #000000;
          font-size: 1rem;
          font-weight: bold;
          text-decoration:none;
          text-transform: uppercase;
        }
        nav .nav-list ul li a:hover{
          text-decoration:underline;
        }
        .nav-button {
          width:20%;
        }
        .nav-button button {
          background-color: rgba(0, 247, 41, 0.7);
          border: none;
          border-radius: 30px;
          color: #121212;
          cursor: pointer;
          font-size: 1em;
          font-weight: bold;
          padding: 0.6em 1em;
          text-transform: uppercase;
        }
        .nav-button button:hover {
          background-color: #121212;
          color: #fff;
          transform: scale(1.3);
          transition:.4s ease-out;
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
