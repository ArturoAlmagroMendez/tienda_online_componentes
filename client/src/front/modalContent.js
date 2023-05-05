class ModalContent extends HTMLElement {
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
        width:100%;
        display:flex;
      }
      .modal-content-front {
        height:100%;
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
      }
      .modal-content-hidden {
        width: 100%;
        height: 100%;
      }
      </style>
        <div class="modal-content-front">
            <slot name="swiperInfo"></slot>
            <swiper-component></swiper-component>
    </div>
    <div class="modal-content-hidden">
            <slot name="swiperForm"></slot>
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

customElements.define("modal-content-component", ModalContent);
