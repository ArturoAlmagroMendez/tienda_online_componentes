class Menu extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
            .menu{
                background-color:#fff;
                width:100%;
                position:absolute;
                z-index:9999;
                transform:translateY(-100%);
                transition:1s linear;
            }
            .menu.active{
                transform:translateY(0%);
            }
        </style>
        <div class="menu">
            <div class="menu-button">
                <button id="menu-button">X</button>
            </div>
        </div>
      `;
    }
    connectedCallback() {
      // Método que se ejecuta cuando el componente se agrega al DOM
    }
  
  
  }
  
  customElements.define("menu-component", Menu);
  
