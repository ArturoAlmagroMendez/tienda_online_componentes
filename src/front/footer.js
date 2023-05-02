class Footer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();

    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        footer{
            width:100%;
            height: 10vh;
            background-color: rgb(143, 217, 251);
          
          }
          .footer-content {
            display: flex;
            justify-content: center;
            flex-direction: column;
            
          }
          .footer-content .footer-social-networks {
            display: flex;
            justify-content: center;
            gap: 1em;
          }
          .footer-content .footer-social-networks img {
            height: 2em;
            width: 2em;
            margin-bottom: 1em;
          }
          .footer-content .footer-menu ul {
            text-align: center;
            display: flex;
            gap: 0.4em;
            justify-content: center;
            
          }
        </style>
        <div class="footer-content">
            <div class="footer-social-networks">
                <picture><img src="./img/linkedin.svg" alt="" /></picture>
                <picture><img src="./img/instagram.svg" alt="" /></picture>
                <picture><img src="./img/facebook.svg" alt="" /></picture>
                <picture><img src="./img/twitter.svg" alt="" /></picture>
            </div>
            <div class="footer-menu">
                <ul>
                    <li><a href="">Mobile App</a></li>
                    <li></li><a href="">Privacy Policy</a></li>
                    <li></li><a href="">About us</a></li>
                    <li></li><a href="">Terms of Use</a></li>
                </ul>
            </div>
            <div class="footer-copyright">
                <p></p>
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
  
  customElements.define("footer-component", Footer);
  
  /* a continuación explicaré cada función que se ha escrito en el ejemplo de Web Component en JavaScript:
  
  class MyComponent extends HTMLElement: Creamos una clase llamada MyComponent que extiende la clase base HTMLElement.
  
  constructor(): Define el constructor de la clase, donde inicializamos el componente y creamos el Shadow DOM.
  
  this.attachShadow({ mode: "open" }): Crea el Shadow DOM para el componente.
  
  this.shadowRoot.innerHTML: Establece el contenido del Shadow DOM.
  
  connectedCallback(): Este método se ejecuta cuando el componente se agrega al DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se agregue a la página web.
  
  disconnectedCallback(): Este método se ejecuta cuando el componente se elimina del DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se elimine de la página web.
  
  attributeChangedCallback(name, oldValue, newValue): Este método se ejecuta cuando se cambia el valor de algún atributo del componente. Podemos utilizarlo para reaccionar a los cambios de atributos.
  
  static get observedAttributes(): Este método estático define la lista de atributos que queremos observar. Cuando se cambie uno de estos atributos, se ejecutará el método attributeChangedCallback.*/