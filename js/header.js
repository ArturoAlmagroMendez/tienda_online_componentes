
class HeaderComponent extends HTMLElement {
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

    }

    async render() {
      // Método que genera el código HTML del componente
      const response = await fetch("./css/header.css");
      const css = await response.text();
      this.shadowRoot.innerHTML = `
      <style>
        ${css}
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
