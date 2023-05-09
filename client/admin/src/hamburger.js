class Hamburger extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        .hamburger{
            cursor: pointer;
            display:flex;
            flex-direction: column;
            gap:.5rem;
        }
        .line{
            width:6rem;
            height: .6rem;
            background-color: rgb(255, 255, 255);
        }
        </style>
        <div class="hamburger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
      `;
    }
    connectedCallback() {
      // Método que se ejecuta cuando el componente se agrega al DOM
    }
  
  
  }
  
  customElements.define("hamburger-component", Hamburger);
  
