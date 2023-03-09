class ContactComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <style>
            .contact {
                height: 90vh;
                width: 100%;
                background-color: rgb(0, 0, 0);
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .contact .contact-map {
                
            }
            .contact .contact-map iframe {
                position: absolute;
                z-index: -1;
                width: 90vw;
                height: 40vh;
            }
            .contact .contact-card-container {
                width: 40%;
                height: 50vh;
                padding:20%;
                position: relative;
                perspective: 800px;
            }
            .flip-card {
                width: 100%;
                height: 100%;
                perspective: 1000px;
                align-items:center;
              }
              
              .flip-card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                text-align: center;
                transition: transform 0.6s;
                transform-style: preserve-3d;
              }
              
              .flip-card-front, .flip-card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
              }
              
              .flip-card-front {
                background-color: #fff;
                color: black;
                display:flex;
                flex-direction:column;
              }
              .flip-card-item{
                display:flex;
                flex-direction: column;
              }
              .flip-card-title{
                font-size:2.5rem;
              }
              .flip-card-item-text{
                font-size:1.1rem;
              }
              .flip-card-item-column{
                display:flex;
                gap:0.5rem;
                justify-content:center;
              }
              .flip-card-front-button{
                width:80%;
                padding:10%;
                
              }
              #contact-btn{
                width:100%;
                background-color:#0084ff;
                padding:1.5rem 1rem;
                border:none;
                font-size:2rem;
                color:#fff;
                font-weight:bold;
                text-transform:uppercase;
                cursor:pointer;
              }
              #contact-btn:hover{
                background-color:black;
                transition:.5s ease-out;
              }
              
              .flip-card-back {
                background-color: #2980b9;
                color: white;
                transform: rotateY(180deg);
              }
              
              .flip-card-back form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              
              .flip-card-back label, .flip-card-back input, .flip-card-back textarea {
                margin: 10px 0;
              }
              
              .flip-card-back input, .flip-card-back textarea {
                padding: 5px;
                border: none;
                border-radius: 3px;
              }
              
              .flip-card-back input[type="submit"] {
                background-color: #4CAF50;
                color: white;
                cursor: pointer;
              }
              
              .flip-card-inner.flipped {
                transform: rotateY(180deg);
              }
            
        </style>
        <div class="contact">
            <div class="contact-map">
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=2.8612089157104497%2C39.47529301752096%2C2.9075574874877934%2C39.504305605954634&amp;layer=mapnik"
                    style="border: 1px solid black"></iframe><br /><small><a
                        href="https://www.openstreetmap.org/#map=15/39.4898/2.8844">Ver mapa más grande</a></small>
            </div>
            <div class="contact-card-container">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="flip-card-title">
                                <h5>GET IN TOUCH</h5>
                            </div>
                            <div class="flip-card-item">
                                <div class="flip-card-item-column">
                                    <div class="flip-card-item-icon">
                                        <p>icon</p>
                                    </div>
                                    <div class="flip-card-item-text">
                                        <p>textextext</p>
                                    </div>
                                </div>    
                            </div>
                            <div class="flip-card-item">
                                <div class="flip-card-item-column">
                                    <div class="flip-card-item-icon">
                                        <p>icon</p>
                                    </div>
                                    <div class="flip-card-item-text">
                                        <p>textextext</p>
                                    </div>
                                </div> 
                            </div>
                            <div class="flip-card-item">
                                <div class="flip-card-item-column">
                                    <div class="flip-card-item-icon">
                                        <p>icon</p>
                                    </div>
                                    <div class="flip-card-item-text">
                                        <p>textextext</p>
                                    </div>
                                </div> 
                            </div>
                            <div class="flip-card-front-button" >
                                <button id="contact-btn">Contact Us</button>
                            </div>    
                        </div>
                        <div class="flip-card-back">
                            <form>
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required>
                            
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                            
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                            
                            <input type="submit" value="Submit">
                            </form>
                        </div>
                    </div>
                </div>
	        </div>
        </div>
      `;
    }
  
    connectedCallback() {
        const contactBtn = this.shadowRoot.querySelector('#contact-btn');
        const cardInner = this.shadowRoot.querySelector('.flip-card-inner');
        
        contactBtn.addEventListener('click', () => {
          cardInner.classList.toggle('flipped');
        });
        
        const form = this.shadowRoot.querySelector('form');
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          // Aquí podrías agregar tu lógica para enviar el formulario
          console.log('Form submitted');
        });
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
  
  customElements.define("contact-component", ContactComponent);