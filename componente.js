class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos del componente */
      </style>
      <div>
        <!-- Contenido del componente -->
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

customElements.define("header-component", HeaderComponent);

/* a continuación explicaré cada función que se ha escrito en el ejemplo de Web Component en JavaScript:

class MyComponent extends HTMLElement: Creamos una clase llamada MyComponent que extiende la clase base HTMLElement.

constructor(): Define el constructor de la clase, donde inicializamos el componente y creamos el Shadow DOM.

this.attachShadow({ mode: "open" }): Crea el Shadow DOM para el componente.

this.shadowRoot.innerHTML: Establece el contenido del Shadow DOM.

connectedCallback(): Este método se ejecuta cuando el componente se agrega al DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se agregue a la página web.

disconnectedCallback(): Este método se ejecuta cuando el componente se elimina del DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se elimine de la página web.

attributeChangedCallback(name, oldValue, newValue): Este método se ejecuta cuando se cambia el valor de algún atributo del componente. Podemos utilizarlo para reaccionar a los cambios de atributos.

static get observedAttributes(): Este método estático define la lista de atributos que queremos observar. Cuando se cambie uno de estos atributos, se ejecutará el método attributeChangedCallback.*/