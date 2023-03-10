class SliderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      
    }
  
    connectedCallback() {
      // Método que se ejecuta cuando el componente se agrega al DOM
      this.render();
    }
    render() {
      // Método que genera el código HTML del componente
      this.shadowRoot.innerHTML = `
        <style>
            .slider {
                align-items: center;
                display: flex;
                flex-direction: column;
                gap:1em;
                height: 100vh;
                justify-content: center;
                text-align: center;
                width: 100%;
            }
            .slider .slider-img {
                position: absolute;
                z-index: -1;
            }
            .slider .slider-img img {
                width: 100%;
            }
            .slider .slider-title h1 {
              font-size:4rem;
              margin: 0;
            }
            .slider-text p{
              font-size:1.4rem;
            }
            .slider-button button {
                background-color: rgba(0, 247, 41, 0.7);
                border: none;
                border-radius: 30px;
                cursor: pointer; 
                font-weight: 600;
                height:95%;
                padding: 1em 1.5em;    
            }
            .slider-button button:hover {
                background-color: #949191;
                color:#fff;
                transition:.5s ease-out;
            }
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