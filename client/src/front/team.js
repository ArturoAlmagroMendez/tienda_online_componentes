import "./socials.js";
class Team extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        
        .team {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            position: relative;
            width: 100%;
            height: 100vh;
            background-color: hsl(0, 0%, 0%);
            z-index:1;            
          }
          .team .team-background-image{
            z-index:-1;
            position: absolute;
            width: 100%;
            height: 100%;
          }
          img {
            object-fit: cover;
            max-width: 100%;
          }
          .team .team-title h3{
            font-family: Anime;
            font-size: 6rem;
            font-weight: 300;
            color:#fff;
            margin:0;
          }
          .team .team-text{
            margin-bottom: 3rem;
          }
          .team .team-text p{
            font-size: 2rem;
            color:#fff;
          }
          
        </style>
        <div id="team" class="team">
                <div class="team-background-image">
                    <picture>
                        <img src="/img/rojonegro.webp" alt="">
                    </picture>
                </div>
                <div class="team-title">
                    <h3>Top Artists</h3>
                </div>
                <div class="team-text">
                    <p>This ir our top artists of the month!</p>
                </div>
                <socials-component></socials-component>
                
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
  
  customElements.define("team-component", Team);
  
  /* a continuación explicaré cada función que se ha escrito en el ejemplo de Web Component en JavaScript:
  
  class MyComponent extends HTMLElement: Creamos una clase llamada MyComponent que extiende la clase base HTMLElement.
  
  constructor(): Define el constructor de la clase, donde inicializamos el componente y creamos el Shadow DOM.
  
  this.attachShadow({ mode: "open" }): Crea el Shadow DOM para el componente.
  
  this.shadowRoot.innerHTML: Establece el contenido del Shadow DOM.
  
  connectedCallback(): Este método se ejecuta cuando el componente se agrega al DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se agregue a la página web.
  
  disconnectedCallback(): Este método se ejecuta cuando el componente se elimina del DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se elimine de la página web.
  
  attributeChangedCallback(name, oldValue, newValue): Este método se ejecuta cuando se cambia el valor de algún atributo del componente. Podemos utilizarlo para reaccionar a los cambios de atributos.
  
  static get observedAttributes(): Este método estático define la lista de atributos que queremos observar. Cuando se cambie uno de estos atributos, se ejecutará el método attributeChangedCallback.*/