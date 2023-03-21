class SliderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      // Método que se ejecuta cuando el componente se agrega al DOM
      this.render();
    }
    async render() {
      const response = await fetch("./css/slider.css");
      const css = await response.text();
      // Método que genera el código HTML del componente
      this.shadowRoot.innerHTML = `
        <style>
          ${css}
        </style>
        <div class="slider">
          <div class="slider-img">
              <picture>
                  <img src="./img/fondo5.webp" alt="" />
              </picture>
          </div>
          <div class="slider-title">
              <h1>The future of tech is here</h1>
          </div>
          <div class="slider-text">
              <p>¡This is the best time to learn web development!</p>
          </div>
          <div class="slider-button">
              <button>BUY WITH PAYPAL</button>
          </div>
        </div>
      `;
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
  
  customElements.define("slider-component", SliderComponent);