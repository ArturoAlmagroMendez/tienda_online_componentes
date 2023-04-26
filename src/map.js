class Map extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
            .contact-map {
                align-items: center;
                display: flex;
                height: 100%;
                width: 100%;
                z-index: -1;
                position: absolute;
            }
          
            .contact-map .contact-map-zoom {
                align-items: center;
                background-color: #fff;
                border: 1px solid black;
                box-shadow: 3px 5px 4px #888888;
                color: #080909;
                display: flex;
                font-size: 1.1rem;
                font-family: 'Poppins', sans-serif;
                cursor: pointer;
                gap: 0.5rem;
                height: 5vh;
                position: absolute;
                left: 5%;
                padding: 10px;
                text-align: center;
                top: 15%;
                width: 15%;
            }
          
            .contact-map .contact-map-zoom .contact-map-zoom-link {
                position: absolute;
            }
          
            .contact-map .contact-map-zoom .contact-map-zoom-link small a {
                background-color: #050404;
                padding: 0.3rem 0.3rem;
                color: #020101;
                font-weight: bold;
            }
            
            .contact-map iframe {
                position: relative;
                z-index: -1;
                width: 100%;
                height: 100%;
            }
          
        </style>
        <div class="contact-map">
            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.8612089157104497%2C39.47529301752096%2C2.9075574874877934%2C39.504305605954634&amp;layer=mapnik"
            style="border: 1px solid black"></iframe>
            <div class="contact-map-zoom">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="36px" height="36px" viewBox="0 0 24 24" id="zoom-in" class="icon multi-color"><ellipse id="secondary-fill" cx="8.5" cy="10" rx="5.5" ry="6.84" style="fill: rgb(44, 169, 188); stroke-width: 2;"/><path id="primary-stroke" d="M17,10a7,7,0,1,1-7-7A7,7,0,0,1,17,10Zm4,11-6-6M10,7v6M7,10h6" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"/></svg>
                <div class="contact-map-zoom-link>
                    <small><a
                        href="https://www.openstreetmap.org/#map=15/39.4898/2.8844">Ver mapa más grande</a>
                    </small>
                </div>
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
  
  
  }
  
  customElements.define("map-component", Map);
  
