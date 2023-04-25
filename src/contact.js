class Contact extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();

    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        .contact {
            align-items: center;
            display: flex;
            height: 90vh;
            justify-content: center;
            position: relative;
            width: 100%;
          }
          
          .contact .contact-map {
            align-items: center;
            display: flex;
            height: 100%;
            width: 100%;
          }
          
          .contact .contact-map .contact-map-zoom {
            align-items: center;
            background-color: #fff;
            border: 1px solid black;
            box-shadow: 3px 5px 4px #888888;
            color: #080909;
            display: flex;
            font-size: 1.1rem;
            font-family: 'Poppins', sans-serif;
            cursor: pointer;
            gap: 0.5rem;
            height: 5vh;
            position: absolute;
            left: 5%;
            padding: 10px;
            text-align: center;
            top: 15%;
            width: 15%;
          }
          
          .contact .contact-map .contact-map-zoom .contact-map-zoom-link {
            position: absolute;
          }
          
          .contact .contact-map .contact-map-zoom .contact-map-zoom-link small a {
            background-color: #050404;
            padding: 0.3rem 0.3rem;
            color: #020101;
            font-weight: bold;
          }
          
          .contact .contact-map iframe {
            position: relative;
            z-index: -1;
            width: 100%;
            height: 100%;
          }
          
          .contact .contact-card-container {
            width: 50%;
            height: 50%;
            position: absolute;
            perspective: 800px;
            align-items: center;
          }
          
          .flip-card {
            width: 100%;
            height: 100%;
            perspective: 1000px;
          
          }
          
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          
          }
          
          .flip-card-inner.active {
            transform: rotateY(180deg);
          }
          
          .flip-card-front,
          .flip-card-back {
            backface-visibility: hidden;
            padding: 5% 10%;
            position: absolute;
            width: 100%;
            height: 100%;
          }
          
          .flip-card-front {
            width: 100%;
            align-items: flex-start;
            background-color: #ffffff;
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          
          .flip-card-item {
            display: flex;
            flex-direction: column;
          }
          
          .flip-card-title h5 {
            font-size: 2.5rem;
            margin: 0;
            font-family: 'Poppins', sans-serif;
          
          }
          
          .flip-card-item-text {
            font-size: 1.1rem;
            color: hsl(0, 0%, 0%);
          }
          
          .flip-card-item-column {
            display: flex;
            gap: 0.5rem;
            justify-content: center;
            align-items: center;
          }
          
          .flip-card-front-button {
            width: 100%;
          }
          
          .contact-btn {
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
          
          .contact-btn:hover {
            background-color: hsl(0, 7%, 63%);
            transition: .5s ease-out;
          }
          
          .flip-card-back {
            background-color: #b4bffc;
            transform: rotateY(180deg);
          }
          
          .flip-card-back form {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: 1.5rem;
            height: 100%;
            width: 100%;
          }
          
          .flip-card-back form .flip-card-inputs {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
          
          .flip-card-back form .flip-card-inputs .flip-card-input {
            width: 45%;
          }
          
          .flip-card-back form .flip-card-inputs input {
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
          .flip-card-back form .flip-card-inputs input::placeholder {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
          }
          
          .flip-card-back form .flip-card-inputs input::focus {
            border: none;
            border-bottom: 1px solid #fff;
          }
          
          .contact .flip-card .flip-card-inner .flip-card-back .flip-card-message {
            height: 100%;
            width: 100%;
          }
          
          .contact .flip-card .flip-card-inner .flip-card-back form textarea {
            background: #fff;
            border: 1px solid #000;
            border-radius: 5px;
            color: #000;
            font-size: 1rem;
            height: 100%;
            width: 100%;
          }
          
          .contact .flip-card .flip-card-inner .flip-card-back form textarea::placeholder {
            color: #000;
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
          }
          
          .contact .flip-card .flip-card-inner .flip-card-back form textarea:focus {}
          
          .contact .flip-card .flip-card-inner .flip-card-back .flip-card-submit {
            width: 100%;
          
          }
          
          .contact .flip-card .flip-card-inner .flip-card-back .flip-card-submit button {
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
          
          .contact .flip-card .flip-card-inner .flip-card-back .flip-card-submit button:hover {
            background-color: hsl(0, 0%, 100%);
            color:hsl(0, 0%, 0%);
            transition: .5s ease-out;
          }
          
          .flip-card-inner.flipped {
            transform: rotateY(180deg);
          }
          span{
            font-family:'Poppins' , sans-serif;
          }
        </style>
        <div id="contact" class="contact">
            <div class="contact-map">
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=2.8612089157104497%2C39.47529301752096%2C2.9075574874877934%2C39.504305605954634&amp;layer=mapnik"
                    style="border: 1px solid black"></iframe>
                    <div class="contact-map-zoom">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="36px" height="36px" viewBox="0 0 24 24" id="zoom-in" class="icon multi-color"><ellipse id="secondary-fill" cx="8.5" cy="10" rx="5.5" ry="6.84" style="fill: rgb(44, 169, 188); stroke-width: 2;"/><path id="primary-stroke" d="M17,10a7,7,0,1,1-7-7A7,7,0,0,1,17,10Zm4,11-6-6M10,7v6M7,10h6" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"/></svg>
                        <div class="contact-map-zoom-link>
                            <small><a
                                href="https://www.openstreetmap.org/#map=15/39.4898/2.8844">Ver mapa más grande</a>
                            </small>
                        </div>
                    </div>        
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
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="_x32_" width="28px" height="28px" viewBox="0 0 512 512" xml:space="preserve">
                                        <style type="text/css">
                                        <![CDATA[
                                            .st0{fill:#000000;}
                                        ]]>
                                        </style>
                                        <g>
                                            <path class="st0" d="M390.54,55.719C353.383,18.578,304.696,0,255.993,0c-48.688,0-97.391,18.578-134.547,55.719   c-59.219,59.219-74.641,149.563-36.094,218.875C129.586,354.109,255.993,512,255.993,512s126.422-157.891,170.656-237.406   C465.195,205.281,449.773,114.938,390.54,55.719z M255.993,305.844c-63.813,0-115.563-51.75-115.563-115.547   c0-63.859,51.75-115.609,115.563-115.609c63.828,0,115.578,51.75,115.578,115.609C371.571,254.094,319.821,305.844,255.993,305.844   z"/>
                                        </g>
                                        </svg>
                                    </div>
                                    <div class="flip-card-item-text">
                                        <p>Calle ejemplo nº 3424</p>
                                    </div>
                                </div>    
                            </div>
                            <div class="flip-card-item">
                                <div class="flip-card-item-column">
                                    <div class="flip-card-item-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="26px" width="26px" version="1.1" id="_x32_" viewBox="0 0 512 512" xml:space="preserve">
                                            <style type="text/css">
                                                .st0{fill:#000000;}
                                            </style>
                                            <g>
                                                <path class="st0" d="M337.469,206.488v-79.735l-42.812,7.654v32.814H217.34v-32.814l-42.809-7.654v79.735h-50.883L65.566,333.609   v25.135v18.062v53.512v7.096v10.341c0,10.862,8.016,19.668,17.898,19.668h345.066c9.887,0,17.902-8.806,17.902-19.668v-10.341   v-7.096v-53.512v-18.062v-25.135l-58.82-127.121H337.469z M256,410.493c-39.942,0-72.32-32.38-72.32-72.322   c0-39.942,32.379-72.322,72.32-72.322s72.32,32.38,72.32,72.322C328.32,378.113,295.942,410.493,256,410.493z"/>
                                                <path class="st0" d="M434.02,70.476c-38.508-16.331-123.258-25.9-178.02-25.9c-53.02,0-139.512,9.568-178.02,25.9   C39.016,87,0,123.985,0,167.556c0,23.89,11.906,38.075,14.754,41.373c0,0,16.304,0,20.652,0h24.308c13.367,0,29.328,0,37.938,0   c4.934,0,15.734-21.419,15.734-30.166c0-15.386-8.148-36.78-8.148-36.78c0.469-10.588,4.676-18.324,21.918-25.736   c31.262-13.438,100.019-14.041,128.844-14.041c28.824,0,97.582,0.604,128.844,14.041c17.242,7.412,21.449,15.148,21.918,25.736   c0,0-8.148,21.394-8.148,36.78c0,8.747,10.801,30.166,15.734,30.166c8.606,0,24.566,0,37.938,0h24.308c4.348,0,20.652,0,20.652,0   c2.848-3.298,14.754-17.484,14.754-41.373C512,123.985,472.984,87,434.02,70.476z"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="flip-card-item-text">
                                        <p>(ESP) +34 616 517 403</p>
                                    </div>
                                </div> 
                            </div>
                            <div class="flip-card-item">
                                <div class="flip-card-item-column">
                                    <div class="flip-card-item-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="24px" width="24px" version="1.1" id="_x32_" viewBox="0 0 512 512" xml:space="preserve">
                                            <style type="text/css">
                                                .st0{fill:#000000;}
                                            </style>
                                            <g>
                                                <path class="st0" d="M508.854,75.71c-4.547-17.77-13.829-33.701-26.342-46.214C464.393,11.291,439.008,0,411.35,0h-310.7   c-27.744,0-53.128,11.29-71.231,29.496C16.89,42.009,7.624,57.94,3.06,75.71C1.06,83.666,0,92.068,0,100.65v43.41V411.35   c-0.086,27.658,11.299,53.034,29.419,71.154C47.522,500.709,72.906,512,100.65,512h310.7c27.658,0,53.042-11.291,71.162-29.496   C500.632,464.384,512,439.008,512,411.35V143.975V100.65C512,92.068,510.957,83.666,508.854,75.71z M450.735,411.35   c-0.086,10.94-4.376,20.658-11.555,27.829c-7.266,7.18-16.889,11.556-27.83,11.556h-310.7c-11.026,0-20.65-4.376-27.915-11.556   c-7.18-7.171-11.47-16.889-11.47-27.829V199.983l126.82,115.615c19.163,17.504,43.59,26.256,67.829,26.256   c24.325,0,48.752-8.752,67.915-26.256l126.906-115.701V411.35z M450.735,128.658L288.393,276.743   c-9.196,8.487-20.751,12.598-32.478,12.598c-11.641,0-23.196-4.111-32.376-12.598l-162.274-148V100.65   c0-10.94,4.29-20.658,11.47-27.829C80,65.641,89.624,61.265,100.65,61.265h310.7c10.94,0,20.564,4.376,27.83,11.555   c7.179,7.171,11.469,16.889,11.555,27.829V128.658z"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="flip-card-item-text">
                                        <p>webdevelop@gmail.com</p>
                                    </div>
                                </div> 
                            </div>
                            <div class="flip-card-front-button">
                                <button class="contact-btn">Contact Us</button>
                            </div>    
                        </div>
                        <div class="flip-card-back">
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
                        </div>
                    </div>
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
  
  customElements.define("contact-component", Contact);
  
  /* a continuación explicaré cada función que se ha escrito en el ejemplo de Web Component en JavaScript:
  
  class MyComponent extends HTMLElement: Creamos una clase llamada MyComponent que extiende la clase base HTMLElement.
  
  constructor(): Define el constructor de la clase, donde inicializamos el componente y creamos el Shadow DOM.
  
  this.attachShadow({ mode: "open" }): Crea el Shadow DOM para el componente.
  
  this.shadowRoot.innerHTML: Establece el contenido del Shadow DOM.
  
  connectedCallback(): Este método se ejecuta cuando el componente se agrega al DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se agregue a la página web.
  
  disconnectedCallback(): Este método se ejecuta cuando el componente se elimina del DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se elimine de la página web.
  
  attributeChangedCallback(name, oldValue, newValue): Este método se ejecuta cuando se cambia el valor de algún atributo del componente. Podemos utilizarlo para reaccionar a los cambios de atributos.
  
  static get observedAttributes(): Este método estático define la lista de atributos que queremos observar. Cuando se cambie uno de estos atributos, se ejecutará el método attributeChangedCallback.*/