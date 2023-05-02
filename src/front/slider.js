class Slider extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();

    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
            @font-face {
                font-family: Anime;
                src: url(/fonts/ninja-naruto-font/NinjaNaruto-YOn4.ttf);
            }
            .slider {
                align-items: center;
                display: flex;
                flex-direction: column;
                height: 100vh;
                justify-content:center;
                text-align: center;
                width: 100%;
                height: 100vh;
                gap:4rem;
                z-index: 1;
                position: relative;
                overflow: hidden;
                background-color: #fff;                
            }
            
            .slider .slider-img {
                position:absolute;
                z-index:-1;
                width: 100%;
                
            }
            .slider .slider-img img {
                width: 100%;  
                height:100%;
            }
            .slider-title h1 {
                font-family: Anime;
                color:#fff;
                font-size: 4.3rem;
            }
            
            .slider-text p {
                font-family: Anime;
                color:var(--color-slider);
                font-size: 2rem;
            }
            .slider-button{
                width:20%;
            }
            .slider-button button {
                background-color: #00000;
                border-radius: 40px;
                border: none;
                font-weight: 600;
                font-size: 1.6rem;
                padding: 1.7rem .5rem;
                height:95%;
                width:100%;
                cursor: pointer; 
                transition:.5s ease-out;
            }
            .slider-button button:hover {
                background-color: #000000;
                color:#fff;
                /*font-size:1.2em;*/
                transform: scale(1.2);
                
            }
            
        </style>
        <div id="slider" class="slider">
        <div class="slider-img">
            <picture>
                <img src="./img/animeminim.webp" alt="" />
            </picture>
        </div>
        <div class="slider-content">
            <div class="slider-title">
                <h1>Best anime designs</h1>
            </div>
            <div class="slider-text">
                <p>Buy your favourite handmade fan arts</p>
            </div>
        </div>
        
        <div class="slider-button">
            <button>BUY WITH PAYPAL</button>
        </div>
    </div>
      `;
    }
    connectedCallback() {
    }
  
  
    disconnectedCallback() {
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
    }
  
    static get observedAttributes() {
      return ["attribute1", "attribute2"];
    }
  
    set attribute1(value) {
    }
  
    set attribute2(value) {
    }
  
  
  }
  
  customElements.define("slider-component", Slider);
  
 