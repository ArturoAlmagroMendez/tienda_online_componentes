class LikeButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        :root {
          --size: 100px;
          --frames: 62;
        }
        
        .like-button{
         align-items: center;
         display: flex;
         justify-content: center;
        }
        input.checkbox {
          display: none;
        }
        
        .like {
          display: inline;
          width: var(--size);
          height: var(--size);
          cursor: pointer;
          border-radius: 999px;
          overflow: visible;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-tap-highlight-color: transparent;
        }
        
        .hearth {
          background-image: url('https://assets.codepen.io/23500/Hashflag-DragonBall.svg');
          background-size: calc(var(--size) * var(--frames)) var(--size);
          background-repeat: no-repeat;
          background-position-x: calc(var(--size) * (var(--frames) * -1 + 2));
          background-position-y: calc(var(--size) * 0.02);
          width: var(--size);
          height: var(--size);
        }
        
        input:checked + .hearth {
          animation: like 1s steps(calc(var(--frames) - 3));  
          animation-fill-mode: forwards;
        }
        
        @keyframes like {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: calc(var(--size) * (var(--frames) * -1 + 3));
          }
        }
        
        @media (hover: hover) {
          .like:hover {
            background-color: #E1255E15;
            .hearth {
              background-position-x: calc(var(--size) * (var(--frames) * -1 + 1));
            }
          }
        }
        
        </style>
        <div class="like-button">
            <label class="like">
                <input type="checkbox" class="checkbox"/>
                <div class="hearth"></div>
            </label>
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
  
  customElements.define("like-component", LikeButton );
  
