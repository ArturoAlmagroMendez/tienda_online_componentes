class Admin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    // Método que genera el código HTML del componentea
    this.shadowRoot.innerHTML = `
        <style>
        .admin {
          background-image: linear-gradient(to right top, #0066ff, #0259f5, #074bea, #0e3ddf, #152ed3);
          color: #fff;
          display:flex;
          flex-direction:column;
          gap: 2rem;
          height: 100vh;
          padding: 5% 10%;
          width: 80%;
          position:relative;
      }
      
      .admin form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
      }
      .admin-content {
          display: flex;
          width: 100%;
            justify-content: space-between;
          height:100%;          
      }

        </style>
        <div class="admin">
              <slot name="header"></slot>
              <slot name="dropdown"></slot>  
              <div class="admin-content">
                  <slot name="table"></slot>
                  <slot name="form"></slot> 
              </div>
          <slot name="modal"></slot>
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

customElements.define("admin-component", Admin);
