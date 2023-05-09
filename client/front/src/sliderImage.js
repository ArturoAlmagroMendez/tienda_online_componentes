class SliderImage extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
          :host{
            width:50%;
          }
          .modal-slider-image {
            height: 100%;
            width: 100%;
            position
          }
         .modal-slider-image .swiper-wrapper {
            height: 100%;
            width: 100%;
          }
          .modal-slider-image .swiper-wrapper .swiper-slide {
            height: 100%;
            width: 100%;
          }
          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
          
        </style>
        <div class="modal-slider-image">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <slot name="swiper-image"></slot>
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
  
  customElements.define("slider-image-component", SliderImage);
  
