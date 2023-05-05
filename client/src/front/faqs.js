class Faqs extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();

    }
    toggleFaqs() {
      const dropDownItems = this.shadowRoot.querySelectorAll('.faqs-item .plus-minus-toggle');
      const invisibleItems = this.shadowRoot.querySelectorAll('.faqs-item .answer');
  
      dropDownItems.forEach(dropDownItem => dropDownItem.addEventListener('click', () => {
        let dropDownParent = dropDownItem.closest('.faqs-item');
        let icons = dropDownParent.querySelectorAll('.plus-minus-toggle');
        let invisibleItem = dropDownParent.querySelector('.answer');
        let activeItem = dropDownParent.querySelector('.answer.active');
        icons.forEach(icon => icon.classList.toggle('active'));
  
        if (activeItem && activeItem !== invisibleItem) {
          activeItem.classList.toggle('active');
        }
        if (!invisibleItem.classList.contains('active')) {
          invisibleItem.classList.add('active');
          setTimeout(() => invisibleItem.classList.add('fade-in'), 50);
        } else {
          invisibleItem.classList.remove('fade-in');
          setTimeout(() => invisibleItem.classList.remove('active'), 400);
        }
      }));
    
    }
  
    
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        .faqs{
            display:flex;
            flex-direction:column;
            padding:10%;
            text-align:start;   
            width:80%;
            padding:5% 10%;
            height:max-content;
            background-color: hsl(0, 79%, 36%);
        }
        .faqs .faqs-title{
            text-align:center;
        }
        .faqs .faqs-title h4{
            color:#000000;
            font-size:3rem;
            margin:0;
            font-family: 'Poppins',sans-serif;
        }
        .faqs .faqs-description{
            padding:0 25%;
            text-align:center; 
            margin-bottom:3rem;
        }
        .faqs .faqs-description p{
            color:#000000;
            font-size:1.2rem;
        }
        .faqs .faqs-content{
            display:flex;
            flex-direction:column;
            gap:3rem;
        }
        .faqs .faqs-item{
            display:flex;
            flex-direction:column;
            gap:1rem;
           
        }
        .faqs .faqs-item .question {
            align-items:center;
            display:flex;
            flex-wrap:wrap;
            gap:1rem;
            justify-content:space-between;
            border-bottom:1px solid black;
            padding: 1rem;
            font-family: 'Poppins',sans-serif;
        
        }
        .faqs .faqs-item .question .question-title h5{
            color:#000000;
            font-size:1.7rem;
            font-weight:600; 
        }
        .plus-minus-toggle {
            cursor: pointer;
            position: relative;
            width: 30px;
            height: 30px;
          }
          
          .plus-minus-toggle::before,
          .plus-minus-toggle::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 80%;
            height: 2px;
            background-color: black;
            transform: translate(-50%, -50%);
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
          
          .plus-minus-toggle::before {
            transform-origin: center center;
            transform: translate(-50%, -50%) rotate(0deg);
          }
          
          .plus-minus-toggle::after {
            transform-origin: center center;
            transform: translate(-50%, -50%) rotate(90deg);
          }
          
          .plus-minus-toggle.active::before {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          
          .plus-minus-toggle.active::after {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          
          .plus-minus-toggle.active::before {
            opacity: 0;
          }
        
        .faqs .faqs-content .faqs-item .answer{
            padding-right:1rem;
            display:none;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;  
        }
        
        .faqs .faqs-content .faqs-item .answer.active{
            display: block;
        }
        .faqs .faqs-content .faqs-item .answer.active.fade-in{
            opacity:1;
            transition: opacity 0.5s ease-in-out;
        }
        .faqs .faqs-content .faqs-item .answer p{
            color:#000000;
            font-size:1.2rem;
        }
        </style>
        <div id="faqs" class="faqs">
        <div class="faqs-title">
            <h4>Anime Designs FAQS</h4>
        </div>
        <div class="faqs-description">
            <p>A lot of people don't appreciate the moment until it's passed.I'm not trying my hardest,and I'm not trying to do.</p>
        </div>
        <div class="faqs-content">
            <div class="faqs-item">
                <div class="question">
                    <div class="question-title">
                        <h5>How do I order?</h5>
                    </div>
                    <div class="plus-minus-toggle"></div>

                  
                </div>
                <div class="answer">
                    <p>We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes.We're constantly trying to express ourselves and actualize our dreams.
                    if you have the oportunnity to play this game of life you need to appreciate every moment.A lot of people don't appreciate the moment until it's passed.</p>
                </div>
            </div>
            <div class="faqs-item">
                <div class="question">
                    <div class="question-title">
                        <h5>How can I make the payment?</h5>
                    </div>
                    <div class="plus-minus-toggle"></div>
                </div>
                <div class="answer">
                  <p>We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes.We're constantly trying to express ourselves and actualize our dreams.
                    if you have the oportunnity to play this game of life you need to appreciate every moment.A lot of people don't appreciate the moment until it's passed.</p>
                </div>
            </div>
            <div class="faqs-item">
                <div class="question">
                    <div class="question-title">
                        <h5>How much time does it take to receive the order?</h5>
                    </div>
                    <div class="plus-minus-toggle"></div>

                    
                </div>
                <div class="answer">
                    <p>We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes.We're constantly trying to express ourselves and actualize our dreams.
                    if you have the oportunnity to play this game of life you need to appreciate every moment.A lot of people don't appreciate the moment until it's passed.</p>
                </div>
            </div>
            <div class="faqs-item">
                <div class="question">
                    <div class="question-title">
                        <h5>Can I resell the products??</h5>
                    </div>
                    <div class="plus-minus-toggle"></div>

                </div>
                <div class="answer">
                    <p>We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes.We're constantly trying to express ourselves and actualize our dreams.
                    if you have the oportunnity to play this game of life you need to appreciate every moment.A lot of people don't appreciate the moment until it's passed.</p>
                </div>
            </div>
        </div>
    </div>
      `;
    }
    connectedCallback() {
      this.toggleFaqs();
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
  
  customElements.define("faqs-component", Faqs);
  
  /* a continuación explicaré cada función que se ha escrito en el ejemplo de Web Component en JavaScript:
  
  class MyComponent extends HTMLElement: Creamos una clase llamada MyComponent que extiende la clase base HTMLElement.
  
  constructor(): Define el constructor de la clase, donde inicializamos el componente y creamos el Shadow DOM.
  
  this.attachShadow({ mode: "open" }): Crea el Shadow DOM para el componente.
  
  this.shadowRoot.innerHTML: Establece el contenido del Shadow DOM.
  
  connectedCallback(): Este método se ejecuta cuando el componente se agrega al DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se agregue a la página web.
  
  disconnectedCallback(): Este método se ejecuta cuando el componente se elimina del DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se elimine de la página web.
  
  attributeChangedCallback(name, oldValue, newValue): Este método se ejecuta cuando se cambia el valor de algún atributo del componente. Podemos utilizarlo para reaccionar a los cambios de atributos.
  
  static get observedAttributes(): Este método estático define la lista de atributos que queremos observar. Cuando se cambie uno de estos atributos, se ejecutará el método attributeChangedCallback.*/