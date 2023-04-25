class modalButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();

    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
            .nav-button {
                height:50%;
                width: 100%;
            }
            .nav-button button {
                background-color: #00000;
                border-radius: 30px;
                border: none;
                color: #121212;
                font-size: 1.4rem;
                font-weight: 600;
                font-family:'Poppins' , sans-serif;
                text-transform: uppercase;
                padding: 0.7rem 1.2rem;
                cursor: pointer;
                text-align: center;
                transition:.6s ease-out;
                width:100%;
            }
            .nav-button button:hover {
                background-color: #121212;
                color: #fff;
                transform: scale(1.2);
            
            }
            
            .nav-button button.featured-header-button{
                animation: change-color-header 1s forwards;
            }
        </style>
        <div class="nav-button">
            <button id="header-button">Buy it now</button>
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
  
  customElements.define("modal-button-component", modalButton);
  
  /* a continuación explicaré cada función que se ha escrito en el ejemplo de Web Component en JavaScript:
  
  class MyComponent extends HTMLElement: Creamos una clase llamada MyComponent que extiende la clase base HTMLElement.
  
  constructor(): Define el constructor de la clase, donde inicializamos el componente y creamos el Shadow DOM.
  
  this.attachShadow({ mode: "open" }): Crea el Shadow DOM para el componente.
  
  this.shadowRoot.innerHTML: Establece el contenido del Shadow DOM.
  
  connectedCallback(): Este método se ejecuta cuando el componente se agrega al DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se agregue a la página web.
  
  disconnectedCallback(): Este método se ejecuta cuando el componente se elimina del DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se elimine de la página web.
  
  attributeChangedCallback(name, oldValue, newValue): Este método se ejecuta cuando se cambia el valor de algún atributo del componente. Podemos utilizarlo para reaccionar a los cambios de atributos.
  
  static get observedAttributes(): Este método estático define la lista de atributos que queremos observar. Cuando se cambie uno de estos atributos, se ejecutará el método attributeChangedCallback.*/