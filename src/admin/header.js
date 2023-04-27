class Header extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componente
      const logo = this.getAttribute("logo") || "Logo";
      const pageTitle = this.getAttribute("page-title") || "Clientes";
      this.shadowRoot.innerHTML = `
        <style>
        .admin-header {
            align-items: center;
            display: flex;
            justify-content: space-between;
        }
        
        .admin-header .admin-header-title,
        .admin-header .admin-header-logo{
            font-family: 'Poppins', sans-serif;
            font-size: 1.6rem;
        }
        </style>
        <div class="admin-header">
            <div class="admin-header-logo">
                <h2>${logo}</h2>
            </div>
            <div class="admin-header-title">
                <h2>${pageTitle}</h2>
            </div>
            <hamburger-component></hamburger-component>
        </div>
      `;
    }
    connectedCallback() {
      // Método que se ejecuta cuando el componente se agrega al DOM
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
  
  customElements.define("header-component", Header);
  