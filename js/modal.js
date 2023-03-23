class ModalComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      
     
    }
    render() {
        // Método que genera el código HTML del componente
        this.shadowRoot.innerHTML = `
        <style>
           
            .modal-container {
                box-shadow:0 0 62px rgba(0,0,0,.3);
                display:none;
                margin:10% 10%;
                width:80%;
                height:80vh;
                border:none;
                align-items:center;
                border-radius:5px;
                background-color:#fff;
                z-index:1001;
                position:absolute;
            }
            .modal-container.active {
                display: flex;
              }
            .modal-slider{
                width:70%;
                height:100%;   
            }
            .modal-slider .modal-slider-image{
                height:50%;
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
                width:50%;
                display:flex;
                flex-direction:column;
                padding:0 2rem;
                justify-content:center;
                gap:3rem;
            }
            .modal .modal-content .modal-title h4{
                font-size:2.4rem;
                margin:0;
            }
            .modal .modal-content .modal-subtitle p{
                opacity:.5;
                margin:0;
            }
            .modal .modal-content .prices {
                display:flex;
                gap:1rem;
            }
            .modal .modal-content .prices .old-price {
                text-decoration:line-through;
            }
            .modal .modal-content .prices .old-price span {
                color:red;
                font-weight:600;
            }
            .modal .modal-content .prices .new-price span{
                font-weight:600;
                font-size:1.8rem;
                
            }
            .modal .modal-content .prices .new-price:hover{
                transform: scale(1.2);
                transition:.3s ease-in-out;
            }
            .modal .modal-content .prices .offert-price span{
                background-color:rgba(0, 247, 41, 0.7);
                font-weight:600;
                font-size:1.8rem;
                padding:0 .5rem;
                border-radius:30px;
            }
            .modal .modal-content .prices .offert-price:hover{
                
            }
                
            .divider{
                width:100%;
                height:1px;
                background-color:grey;
                opacity:.5;
            }
            .modal .modal-content .modal-description-text p{
                font-size:1.2rem;
            }
            .checkout{
                text-align:center;
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
                color:#fff;
               background-color:#121212;
               transform: scale(1.3);
               transition:.3s ease-in-out;
            }


        </style>
        <div class="modal">
            <div class="modal-container">
                <div class="modal-slider">
                    <div class="modal-slider-image">
                        <picture>
                            <img src="/img/portada3.jpg">
                        </picture>
                    </div>
                    <div class="modal-slider-image">
                        <picture>
                            <img src="/img/portada4.jpeg">
                        </picture>
                    </div>
                </div>
                <div class="modal-content">
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
                        <div class="divider"></div>
                        <div class="modal-description-text">
                            <p>En este curso aprenderás todo lo necesario para ser desarrollador web desde nivel principiante hasta experto. Te enfrentarás a proyectos reales,aprenderás a utilizar las últimas tecnologías, SEO, diseño profesional, manejo de bases de datos, API REST y a crear tu propio negocio online paso a paso. </p>
                        </div>
                        <div class="divider"></div>
                    </div>
                    <div class="checkout">
                        <button>Comprar</button>
                    </div>   
                </div>

            </div>
        </div>
        
      `;
        
      }
  
    connectedCallback() {
      // Método que se ejecuta cuando el componente se agrega al DOM
      this.render();
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
  
  customElements.define("modal-component", ModalComponent);
  