class FlipCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
  }
  render() {
    // Método que genera el código HTML del componentea
    this.shadowRoot.innerHTML = `
        <style>
          .flip-card {
            display:flex;
            flex-direction:column;
            position: absolute;
            height: 50%;
            width:60%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;   
            background-color:#fff;
          }
          .flip-card.active {
            transform: rotateY(180deg);
          }

          .flip-card-front-button {
            width: 100%;
          }

          #contact-btn {
            width: 100%;
            background-color: #000000;
            padding: 1rem 1rem;
            border: none;
            font-size: 2rem;
            color: #fff;
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
          }
          
          #contact-btn:hover {
            background-color: hsl(0, 7%, 63%);
            transition: .5s ease-out;
          }
          .flip-card-submit button:hover {
            background-color: hsl(0, 0%, 100%);
            color:hsl(0, 0%, 0%);
            transition: .5s ease-out;
          }
          
          .flip-card.flipped {
            transform: rotateY(180deg);
          }
          span{
            font-family:'Poppins' , sans-serif;
          }
          .flip-card-front{
            backface-visibility: hidden;
            padding: 5% 10%;
            position: absolute;
            width: 100%;
            height: 100%;
            align-items: flex-start;
            background-color: #ffffff;
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .flip-card-back {
            backface-visibility: hidden;
            padding: 5% 10%;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #b4bffc;
            transform: rotateY(180deg);
          }
          
        </style>
         
        <div class="flip-card">
          <div class="flip-card-front">
            <slot name="front"></slot>
            <div class="flip-card-front-button">
              ${this.getAttribute('text-button') !== null ? `<button id="contact-btn">${this.getAttribute('text-button')}</button>` : ''}
            </div>  
          </div>
          <div class="flip-card-back">
            <slot name="back"></slot>
          </div>
        </div>
      `;

      
  }
  connectedCallback() {
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

customElements.define("flip-card-component", FlipCard);
