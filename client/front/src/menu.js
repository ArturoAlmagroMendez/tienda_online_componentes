class Menu extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();

    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
            li {
                list-style-type: none;
            }
            a {
                -webkit-transition: 300ms;
                -moz-transition: 300ms;
                -o-transition: 300ms;
                font-weight: 600;
                text-decoration: none;
                transition: 300ms;
            }
            a:hover,
            a:focus {
                outline: none;
                text-decoration: none;
                outline-offset: 0;
            }
            ul li{
                list-style:none;
            }
            ul li a{
                text-decoration:none;
            }
            nav .nav-list ul {
                display: flex;
                flex-wrap: wrap;
                gap: 1em;
                justify-content: center;
            }
            
            nav .nav-list ul li {
                color: #090707;
            }
            nav .nav-list ul li a {
                font-family: 'Poppins', sans-serif;
                color: #000000;
                font-weight: 600;
                font-size: 1.4rem;
                text-transform: uppercase;
            
            }
            nav .nav-list ul li a:hover{
                color:red;
            }
        </style>
        <nav>
            <div class="nav-list">
                <ul>
                    <li><a href="#slider" class="active slider-color">Home</a></li>
                    <li><a href="#featured">Featured</a></li>
                    <li><a href="#details">Details</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#faqs">FAQS</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
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
  
  customElements.define("menu-component", Menu);
  
  /* a continuación explicaré cada función que se ha escrito en el ejemplo de Web Component en JavaScript:
  
  class MyComponent extends HTMLElement: Creamos una clase llamada MyComponent que extiende la clase base HTMLElement.
  
  constructor(): Define el constructor de la clase, donde inicializamos el componente y creamos el Shadow DOM.
  
  this.attachShadow({ mode: "open" }): Crea el Shadow DOM para el componente.
  
  this.shadowRoot.innerHTML: Establece el contenido del Shadow DOM.
  
  connectedCallback(): Este método se ejecuta cuando el componente se agrega al DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se agregue a la página web.
  
  disconnectedCallback(): Este método se ejecuta cuando el componente se elimina del DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se elimine de la página web.
  
  attributeChangedCallback(name, oldValue, newValue): Este método se ejecuta cuando se cambia el valor de algún atributo del componente. Podemos utilizarlo para reaccionar a los cambios de atributos.
  
  static get observedAttributes(): Este método estático define la lista de atributos que queremos observar. Cuando se cambie uno de estos atributos, se ejecutará el método attributeChangedCallback.*/