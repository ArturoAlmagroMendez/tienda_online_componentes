class Modal extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();

    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        .modal-container {
            box-shadow:0 0 62px rgba(0,0,0,.3);
            display:flex;
            color:#000;
            top:15%;
            left:10%;
            width:80%;
            height:80vh;
            border:none;
            align-items:center;
            border-radius:5px;
            background-color:#fff;
            z-index: -1;
            opacity: 0;
            transition: .3s linear;
            position:fixed;
            overflow: hidden;
            
          }
          .modal-close-button{
            width:2rem;
            height:2rem;
            position: absolute;
            top: 2%;
            left: 96%;
            z-index:1001;
            font-size:.7rem;
            text-align: center;
            } 
          .modal-close-button button{
            width:100%;
            height:100%;
            border-radius:30px;
            background-color: #000;
            color:#fff;
            border:none;
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            
          }
          .modal-close-button button:hover{
            background-color: #fff;
            color:#000;
            border:2px solid black;
          }
          .modal-return-button{
            display:none;
            width:2rem;
            height:2rem;
            position: absolute;
            top: 2%;
            left: 51%;
            z-index:1001;
            font-size:.7rem;
            text-align: center;
        
          }
          .modal-return-button button{
             width:100%;
            height:100%;
            border-radius:30px;
            background-color: #000;
            color:#fff;
            border:none;
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            font-size:1rem;
            font-weight: 600;
          }
          .modal-return-button button:hover{
            background-color: #fff;
            color:#000;
            border:2px solid black;
          }
          .modal-return-button.active{
            display:block;
        
          }
          .modal-content-front{
            width:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap:3rem;
          }
          .modal-content.active{
            transform: translateX(0%);
          }
          .modal-content-hidden{
            width:100%;
            height: 100%;
          
          }
          .modal-form{
            height:100%;
            width:100%;
          }
          .modal-content-hidden form{
            height:100%;
            width:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap:2rem;
            padding:0 5%;
          }
          form .modal-form-input{
            width:100%;
            height:3rem;
          }
          form .modal-form-input input{
            height:100%;
          }
          form .modal-form-name-surname{
            width:100%;
            display:flex;
            gap:.5rem;
            height:3rem;
          }
          form .modal-form-name-surname input{
            width: 50%;
          }
          form .modal-form-location{
            width:100%;
            display:flex;
            gap:.5rem;
            height:3rem;
          }
          form .modal-form-location input{
            width: 50%;
          }
          form .modal-form-input input,
          form .modal-form-input select{
            width:100%;
          }
        
          .modal-content-hidden form input,
          .modal-content-hidden form button,
          .modal-form-input{
            font-family: 'Poppins',sans-serif;
          }
          .modal-content-hidden form .modal-form-button{
            width:100%;
            height:4.5rem;
            
          }
          .modal-content-hidden form .modal-form-button button{
            border:none;
            width: 100%;
            height: 100%;
            background-color: #0084ff;
            color:#fff;
            font-weight: 600;
            cursor:pointer;
          }
          .modal-content-hidden form .modal-form-button button:hover{
            background-color: #000;
          }
          .modal-container.active {
            z-index: 2000;
            opacity: 1;
          }
          .modal-slider{
            width:50%;
            height:100%;   
            z-index: 9999;
          }
          .modal-slider .modal-slider-image{
            height:100%;
            width: 100%;
          }
          .modal-slider .modal-slider-image .swiper-wrapper{
            height:100%;
            width:100%;
          }
          .modal-slider .modal-slider-image .swiper-wrapper .swiper-slide{
            height: 100%;
            width: 100%;
          }
          .modal-slider .modal-slider-image .swiper-wrapper .swiper-slide img{
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
          .modal-slider:hover{
           
          }
          .modal-slider img{
            width:100%;
            height:100%;
            cursor:pointer;
          }
          .modal-slider img:hover{
            
          }
          .modal-content{
            height:100%;
            width:100%;
            display:flex;
            padding:0 .8rem;
            justify-content:center;
            gap:2rem;
            color:#000;
            z-index: 1000;
            position: absolute;
            transform: translateX(50%);
            transition: .2s linear;
          }
          .modal-content .modal-title h4{
            font-size:2.4rem;
            margin:0;
          }
           .modal-content .modal-subtitle p{
            opacity:.5;
            margin:0;
          }
           .modal-content .prices {
            display:flex;
            gap:1rem;
          }
           .modal-content .prices .old-price {
            text-decoration:line-through;
          }
           .modal-content .prices .old-price span {
            color:red;
            font-weight:600;
          }
          .modal-content .prices span{
            font-family: 'Poppins', sans-serif;
          }
          .modal-content .prices .new-price span{
            font-weight:600;
            font-size:1.8rem;
            
          }
           .modal-content .prices .new-price:hover{
            transform: scale(1.2);
            transition:.3s ease-in-out;
          }
           .modal-content .prices .offert-price span{
            background-color:rgba(0, 247, 41, 0.7);
            font-weight:600;
            font-size:1.8rem;
            padding:0 .5rem;
            border-radius:30px;
          }
          
          .modal-content ul{
            display:flex;
            gap:.7rem;
          }
          .modal-content ul li a{
            cursor:pointer;
          }
          .modal-content ul li a:hover{
            border-bottom: 1px solid black;
          }
          .modal-content ul li a.tab.active{
            border-bottom: 1px solid black;
          }
          .modal-description{
            display:flex;
            flex-direction: column;
            gap:.5rem;
          }
          .modal-content .tab-content{
           display:none;
          }
          .modal-content .modal-description-list{
            display:flex;
            flex-direction: column;
            gap:1rem;
          }
           .modal-content .tab-content p{
            font-size:1.2rem;
          }
          .modal-content .tab-content.active{
            display:block;
          }
          .checkout{
            text-align:center;
          }
          .invalid{
            border: 1px solid red;
            
          }
          .invalid::placeholder{
            color:red;
          }
          .checkout button{
            font-size:1rem;
            padding:1rem 1.5rem;
            border:none;
            border-radius:30px;
            cursor:pointer;
            width:50%;
            font-weight:600;
            text-transform:uppercase;
            background-color:rgba(0, 247, 41, 0.7);
        
          }
          .checkout button:hover{
            
           background-color:#e74b4b;
           transform: scale(1.3);
           transition:.3s ease-in-out;
          }
          #notification{
            background-color: hsl(0, 0%, 89%);
            border-radius: 0.2rem;
            bottom: 1rem;
            color: rgb(0, 0, 0);
            opacity: 0;
            padding: 1rem;
            position: fixed;
            right: 1rem;
            text-align: center;
            transition: opacity 0.3s ease-in-out;
        }
        
        #notification.active{
            opacity: 1;
        }
        
        #notification.success{
            border-top: 0.2rem solid hsl(120, 100%, 50%);
        }
        
        #notification p{
            font-size: 1.5rem;
        }
        </style>
        <div class="modal-container"> 
                <div class="modal-buttons">
                <div class="modal-close-button">
                    <button class="close-button">X</button>
                </div> 
                    <div class="modal-return-button">
                        <button class="return-button">←</button>
                    </div>
                </div>
               
                <div class="modal-slider">
                    <div class="modal-slider-image">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img src="/img/asta.jpg" alt="Imagen 1"></div>
                        </div>
                    </div>
                </div>
                <div class="modal-content">
                    
                    <div class="modal-content-front">
                        <div class="title-subtitle">
                            <div class="modal-title">
                                <h4>Curso de programación web desde cero</h4>
                            </div>
                            <div class="modal-subtitle">
                                <p>Autor: Arturo Almagro</p>
                            </div>
                        </div>
                        <div class="prices">
                            <div class="old-price">
                                <span>39.99€</span>
                            </div>
                            <div class="new-price">
                                <span>9.99€</span>
                            </div>
                            <div class="offert-price">
                                <span>oferta 75%</span>
                            </div>
                         
                        </div>
                        <div class="modal-description">
                            <div class="modal-description-list">
                                <ul>
                                    <li><a class="tab active" data-target="modal-description-text" >Description</a></li>
                                    <li><a class="tab" data-target="modal-details-text">Details</a></li>
                                    <li><a class="tab" data-target="modal-info-text">+Info</a></li>
                                </ul>
                                <div class="tab-content active" id="modal-description-text">
                                    <p>Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, </p>
                                </div>
                                <div class="tab-content" id="modal-details-text">
                                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                                </div>
                                <div class="tab-content" id="modal-info-text">
                                    <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </p>
                                </div>
                            </div>
                            <div class="plus-minus-button">
                                <div class="minus-button">
                                    <button id="minus-btn">-</button>
                                </div>
                                <div class="input-plus-minus">
                                    <input type="number" id="input-value" value="1">
                                </div>
                                <div class="plus-button">
                                    <button id="plus-btn">+</button>
                                </div>
                                
                            </div>
                            <div class="total-shipment-price">
                                <div class="total-price">
                                    <p>Precio total: 9.99€</p>
                                </div>
                                <div class="shipment">
                                    <p>+ 4.99€ de envío</p>
                                </div>
                            </div>
                           
                           
                        </div>
                       
                        <div class="checkout">
                            <button id="modal-button">Comprar</button>
                        </div> 
                    </div>
                    <div class="modal-content-hidden">
                        <div class="modal-form">
                            <form>
                               
                                <div class="modal-form-name-surname">
                                    <input type="text" placeholder="First name" data-validate="only-letters">
                                    <input type="text" placeholder="Last name" data-validate="only-letters">
                                </div>
                                <div class="modal-form-input">
                                    <input type="email" placeholder="E-mail address" data-validate="email">
                                </div>
                                <div class="modal-form-input">
                                    <input type="text" placeholder="Address Line 1">
                                </div>
                                <div class="modal-form-input">
                                    <input type="text" placeholder="Adress Line 2">
                                </div>
                                <div class="modal-form-location">
                                    <input type="text" placeholder="State" data-validate="only-letters">
                                    <input type="number" placeholder="Zip Code" data-validate="only-numbers">
                                </div>
                                <div class="modal-form-input">
                                    <select name="" id="" >
                                        <option value="" selected>Select An Option</option>
                                    </select>
                                </div>
                                <div class="modal-form-button">
                                    <button class="send-btn">Buy</button>
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
  
  customElements.define("modal-component", Modal);
  
  /* a continuación explicaré cada función que se ha escrito en el ejemplo de Web Component en JavaScript:
  
  class MyComponent extends HTMLElement: Creamos una clase llamada MyComponent que extiende la clase base HTMLElement.
  
  constructor(): Define el constructor de la clase, donde inicializamos el componente y creamos el Shadow DOM.
  
  this.attachShadow({ mode: "open" }): Crea el Shadow DOM para el componente.
  
  this.shadowRoot.innerHTML: Establece el contenido del Shadow DOM.
  
  connectedCallback(): Este método se ejecuta cuando el componente se agrega al DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se agregue a la página web.
  
  disconnectedCallback(): Este método se ejecuta cuando el componente se elimina del DOM. Podemos utilizarlo para realizar alguna tarea cuando el componente se elimine de la página web.
  
  attributeChangedCallback(name, oldValue, newValue): Este método se ejecuta cuando se cambia el valor de algún atributo del componente. Podemos utilizarlo para reaccionar a los cambios de atributos.
  
  static get observedAttributes(): Este método estático define la lista de atributos que queremos observar. Cuando se cambie uno de estos atributos, se ejecutará el método attributeChangedCallback.*/