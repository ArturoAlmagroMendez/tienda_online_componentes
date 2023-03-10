class FooterComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <style>
            footer{
                width:100%;
                height: 10%;
                background-color: rgb(143, 217, 251);
                position:absolute;
                height:10vh;
                
            }
            .footer-content {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items:center;
                
            }
            .footer-content .footer-menu ul{
                list-style:none;
                
            }
            .footer-content .footer-menu ul li a{
                text-decoration:none;
                cursor:pointer;
            }
            .footer-content .footer-menu ul li a:hover{
                background-color:blue;
            }

            .footer-content .social-networks {
                display: flex;
                justify-content: center;
                gap: 1em;
                
            }
            .footer-content .social-networks img {
                height: 2em;
                width: 2em;
                margin-bottom: 1em;
            }
            .footer-content .footer-menu ul {
                text-align: center;
                display: flex;
                gap: 0.4em;
                justify-content: center;
                
            }
           
        </style>
        <footer>
        <div class="footer-content">
            <div class="social-networks">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="36px" height="36px" viewBox="0 0 32 32">

                <title/>
                
                <g id="Instagram">
                
                <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM24.74,10.56a3.45,3.45,0,0,0-3.48-3.49H10.71a3.47,3.47,0,0,0-3.48,3.49V21.1a3.45,3.45,0,0,0,3.48,3.49H21.26a3.43,3.43,0,0,0,3.48-3.49Zm-8.73.9a4.09,4.09,0,0,0-1.38.24,5.36,5.36,0,0,0-1.24.63H9v-.87a2.56,2.56,0,0,1,2.61-2.62h8.75a2.63,2.63,0,0,1,1.89.75A2.48,2.48,0,0,1,23,11.46v.87H18.6a6.14,6.14,0,0,0-1.22-.63A3.87,3.87,0,0,0,16,11.46Zm4.35,11.41H11.61a2.48,2.48,0,0,1-1.86-.78A2.57,2.57,0,0,1,9,20.24v-7h3.49a5.49,5.49,0,0,0-.63,1.23,3.82,3.82,0,0,0-.25,1.4A4.19,4.19,0,0,0,12,17.55a5,5,0,0,0,.93,1.39,4.28,4.28,0,0,0,1.4.95,4.24,4.24,0,0,0,1.72.35,4.29,4.29,0,0,0,3.08-1.3A5,5,0,0,0,20,17.55a4.19,4.19,0,0,0,.35-1.69,3.82,3.82,0,0,0-.25-1.4,6.37,6.37,0,0,0-.6-1.23H23v7a2.52,2.52,0,0,1-.78,1.85A2.57,2.57,0,0,1,20.36,22.87ZM16,13.23a2.55,2.55,0,0,1,1.85.75,2.63,2.63,0,0,1,0,3.74,2.55,2.55,0,0,1-1.85.75,2.63,2.63,0,0,1-1.9-.75,2.66,2.66,0,0,1,0-3.74A2.63,2.63,0,0,1,16,13.23Zm3.5-1.77h1.75V9.71H19.51Z"/>
                
                </g>
                
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="36px" height="36px" viewBox="0 0 32 32">

                    <title/>

                    <g id="Linkedln">

                    <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM9.11,11.39a2.22,2.22,0,0,0,1.6-.58,1.83,1.83,0,0,0,.6-1.38A2.09,2.09,0,0,0,10.68,8a2.14,2.14,0,0,0-1.51-.55A2.3,2.3,0,0,0,7.57,8,1.87,1.87,0,0,0,7,9.43a1.88,1.88,0,0,0,.57,1.38A2.1,2.1,0,0,0,9.11,11.39ZM11,13H7.19V24.54H11Zm13.85,4.94a5.49,5.49,0,0,0-1.24-4,4.22,4.22,0,0,0-3.15-1.27,3.44,3.44,0,0,0-2.34.66A6,6,0,0,0,17,14.64V13H13.19V24.54H17V17.59a.83.83,0,0,1,.1-.43,2.73,2.73,0,0,1,.7-1,1.81,1.81,0,0,1,1.28-.44,1.59,1.59,0,0,1,1.49.75,3.68,3.68,0,0,1,.44,1.9v6.15h3.85ZM17,14.7a.05.05,0,0,1,.06-.06v.06Z"/>

                    </g>

                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="36px" height="36px" viewBox="0 0 32 32">

                <title/>

                <g id="Facebook">

                <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30Zm-9.08-4.81V16.8h2.83l.42-3.26H17.41V11.71a2.88,2.88,0,0,1,.09-1,1.09,1.09,0,0,1,.14-.33c.21-.38.76-.57,1.63-.57h1.5V6.94a22,22,0,0,0-2.5-.14,3.83,3.83,0,0,0-3.61,1.86,4.52,4.52,0,0,0-.63,2.4v2.48h-2.8V16.8H14v8.39Z"/>

                </g>

                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="36px" height="36px" viewBox="0 0 32 32">

                <title/>

                <g id="Twitter">

                <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM12.64,23.39a10.45,10.45,0,0,0,6.89-2.52,11.07,11.07,0,0,0,3.08-4.57,10.45,10.45,0,0,0,.62-3.37v-.64a7.78,7.78,0,0,0,1-.9,8.3,8.3,0,0,0,.83-1h0a6.22,6.22,0,0,1-2.08.58v0a4.21,4.21,0,0,0,.78-.6,4.61,4.61,0,0,0,.82-1.43,6.54,6.54,0,0,1-1.53.69,5.29,5.29,0,0,1-.85.21,3.87,3.87,0,0,0-2.7-1.16,3.72,3.72,0,0,0-2.62,1.06,3.61,3.61,0,0,0-1.13,2.67,4,4,0,0,0,.1.85,12.68,12.68,0,0,1-1.63-.2,12.54,12.54,0,0,1-3.59-1.49A11.24,11.24,0,0,1,8.16,9.29a3.83,3.83,0,0,0,.4,4.27,2.74,2.74,0,0,0,.73.67v0a3.73,3.73,0,0,1-1.65-.45,3.81,3.81,0,0,0,1.13,2.72,3.72,3.72,0,0,0,1.3.8,2.66,2.66,0,0,0,.52.17,1.34,1.34,0,0,1-.42.1H9.6a4.12,4.12,0,0,1-.66-.05,3.74,3.74,0,0,0,1.53,2,3.7,3.7,0,0,0,1.94.58,7.07,7.07,0,0,1-1.05.72,7.51,7.51,0,0,1-3.43.88,9.46,9.46,0,0,1-1,0A10.38,10.38,0,0,0,12.64,23.39Z"/>

                </g>

                </svg>
            
            </div>
            <div class="footer-menu">
                <ul>
                    <li><a href="">Mobile App</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Terms of Use</a></li>
                </ul>
            </div>
            <div class="footer-copyright">
                <p></p>
            </div>
        </div>
    </footer>
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
  
  customElements.define("footer-component", FooterComponent);