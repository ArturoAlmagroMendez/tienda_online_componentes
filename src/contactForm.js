class ContactForm extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
          form {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: 1.5rem;
            height: 100%;
            width: 100%;
          }
          
          form .flip-card-inputs {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
          
         form .flip-card-inputs .flip-card-input {
            width: 45%;
          }
          
          form .flip-card-inputs input {
            background: #fff;
            border-radius: 5px;
            box-sizing: border-box;
            color: #000;
            font-size: 1rem;
            padding: .8rem;
            width: 100%;
            font-family: 'Poppins' , 'sans-serif';
          }
          
          .invalid{
            border:1px solid red;
          }
          .invalid::placeholder{
            color:red;
          }
          form .flip-card-inputs input::placeholder {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
          }
          
          form .flip-card-inputs input::focus {
            border: none;
            border-bottom: 1px solid #fff;
          }
          
         .flip-card-message {
            height: 100%;
            width: 100%;
          }
          
          form textarea {
            background: #fff;
            border: 1px solid #000;
            border-radius: 5px;
            color: #000;
            font-size: 1rem;
            height: 100%;
            width: 100%;
          }
          
          form textarea::placeholder {
            color: #000;
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
          }
          
          
         .flip-card-submit {
            width: 100%;
          
          }
          
          .flip-card-submit button {
            background-color: hsl(0, 0%, 0%);
            border: none;
            color: hsl(0, 0%, 91%);
            cursor: pointer;
            font-size: 2rem;
            font-weight: 600;
            text-transform: uppercase;
            font-family: 'Poppins', sans-serif;
            padding: 1rem 1rem;
            width: 100%;
          }
          
        
        </style>
        <form>
            <div class="flip-card-inputs">
                <div class="flip-card-input">
                    <input class="limited" type="text" id="name" name="name" placeholder="Name" maxlength="20" data-validate="only-letters" required>

                </div>
                <div class="flip-card-input">
                    <input class="limited" type="email" id="email" name="email" maxlength="20" placeholder="Email" data-validate="email" required>

                </div>
            </div> 
            <div class="flip-card-message">
                <textarea id="message" name="message" placeholder="Place your message here.."  required></textarea>
            </div>
            <div class="flip-card-submit">
                <button  class="send-btn">Send message</button>
            </div>
        </form>

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
  
  customElements.define("contact-form-component", ContactForm);
  
  /* a continuación explicaré cada función que se ha escrito en el ejemplo de Web Component en JavaScript:
  
  class MyComponent extends HTMLElement: Creamos una clase llamada MyComponent que extiende la clase base HTMLElement.
  
  constructor(): Define el constructor de la clase, donde inicializamos el componente y creamos el Shadow DOM.
  
  this.attachShadow({ mode: "open" }): Crea el Shadow DOM para el componente.
  
  this.shadowRoot.innerHTML: Establece el contenido del Shadow DOM.
  
  connectedCallback(): Este método se ejecuta cuando el componente se agrega al DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se agregue a la página web.
  
  disconnectedCallback(): Este método se ejecuta cuando el componente se elimina del DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se elimine de la página web.
  
  attributeChangedCallback(name, oldValue, newValue): Este método se ejecuta cuando se cambia el valor de algún atributo del componente. Podemos utilizarlo para reaccionar a los cambios de atributos.
  
  static get observedAttributes(): Este método estático define la lista de atributos que queremos observar. Cuando se cambie uno de estos atributos, se ejecutará el método attributeChangedCallback.*/