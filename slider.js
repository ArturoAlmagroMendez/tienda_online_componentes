class SliderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <style>
            .slider {
                align-items: center;
                display: flex;
                flex-direction: column;
                height: 100vh;
                justify-content: center;
                text-align: center;
                width: 100%;
                gap:1em;
            }
            .slider .slider-img {
                position: absolute;
                z-index: -1;
            }
            .slider .slider-img img {
                width: 100%;
            }
            .slider-title {
            }
            .slider-text {
            }
            .slider-button{
                
            }
            .slider-button button {
                background-color: rgba(0, 247, 41, 0.7);
                border-radius: 30px;
                border: none;
                font-weight: bold;
                padding: 1em 1em;
                height:95%;
                cursor: pointer;
                
            }
            .slider-button button:hover {
                background-color: #949191;
                color:#fff;
                /*font-size:1.2em;*/
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
  
    render() {
      // Método que genera el código HTML del componente
    }
  }
  
  customElements.define("slider-component", SliderComponent);