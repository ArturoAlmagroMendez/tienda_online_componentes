class ModalComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      
     
    }
    async render() {
        const response = await fetch("./css/modal.css");
        const css = await response.text();
        // Método que genera el código HTML del componente
        this.shadowRoot.innerHTML = `
        <style>
            ${css}
        </style>
        <div class="modal">
            <div class="modal-container">
                <div class="modal-slider">
                    <div class="modal-slider-image">
                        <picture>
                            <img src="/img/portada3.jpg">
                        </picture>
                    </div>
                    <div class="modal-slider-image">
                        <picture>
                            <img src="/img/portada4.jpeg">
                        </picture>
                    </div>
                </div>
                <div class="modal-content">
                    <div class="title-subtitle">
                        <div class="modal-title">
                            <h4>Curso de programación web desde cero</h4>
                        </div>
                        <div class="modal-subtitle">
                            <p>Autor: Arturo Almagro</p>
                        </div>
                    </div>
                    <div class="prices">
                        <div class="old-price">
                            <span>39.99€</span>
                        </div>
                        <div class="new-price">
                            <span>9.99€</span>
                        </div>
                        <div class="offert-price">
                            <span>offer 75%</span>
                        </div>
                    </div>
                    <div class="modal-description">
                        <div class="divider"></div>
                        <div class="modal-description-text">
                            <p>En este curso aprenderás todo lo necesario para ser desarrollador web desde nivel principiante hasta experto. Te enfrentarás a proyectos reales,aprenderás a utilizar las últimas tecnologías, SEO, diseño profesional, manejo de bases de datos, API REST y a crear tu propio negocio online paso a paso. </p>
                        </div>
                        <div class="divider"></div>
                    </div>
                    <div class="checkout">
                        <button>Comprar</button>
                    </div>   
                </div>

            </div>
        </div>
        
      `;
        
      }
  
    connectedCallback() {
      // Método que se ejecuta cuando el componente se agrega al DOM
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
  
  customElements.define("modal-component", ModalComponent);
  