class TeamComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      
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
  
    render() {
      // Método que genera el código HTML del componente
      this.shadowRoot.innerHTML = `
        <style>
            .team {
                background-color: rgb(26, 26, 26);
                display: flex;
                flex-direction: column;
                height: 100vh;
                justify-content: center;
                text-align: center;
                width: 100%;
            }
            .team .team-title h3{
                font-size: 2.8rem;
                margin:0;
            }
            .team .team-text{
                margin-bottom: 2rem;
            }
            .team .team-text p {
                font-size:1.3rem;
            }
            .team-content {
                display: flex;
                gap: 2em;
                justify-content: center;
            }
            .team-content .team-item {
                align-items: center;
                display: flex;
                flex-direction: column;
                gap:.5rem;
            }
            .team-content .team-item .team-item-image {
                height: 60%;                
                position: relative;
                width: 100%;
            }
            .team-content .team-item .team-item-image img{
                height:100%;
                width:100%;
                border-radius:5px;
            }
            .team-content .team-item .team-social-networks {
                align-items: center;
                background-color: #fff;
                border-radius: 50px;
                cursor:pointer;
                display:flex;
                flex-direction: column;
                gap:.2em;
                height: 1.7rem;
                justify-content: center;
                padding:3px 3px;
                position: absolute;
                right:0.2em;
                top:0.8em;
                width: 1.7em;
                z-index:1;  
            }
            .stick {
                background-color: #000000;
                border-radius: 4px;
                height: 0.3rem;
                position: relative;
                width: 1.4rem;
            }
            .team-content .team-item .team-item-title h5{
                font-size: 1.4rem;
                margin:0;
            }
            
            .team-content .team-item .team-item-text-subtitle p{
                font-size: 1.1rem;
                margin:0;
            }
            .team-content .team-item .team-social-networks button{
                width:100%;
                height:100%;
            }
          
        </style>
        <div class="team">
                <div class="team-title">
                    <h3>Meet the team</h3>
                </div>
                <div class="team-text">
                    <p>This ir our teachers team!</p>
                </div>
                <div class="team-content">
                    <div class="team-item">
                        <div class="team-item-image">
                            <picture>
                                <img src="./img/team1.webp" alt="" />
                            </picture>
                            <div class="team-social-networks">
                                <div class="stick stick-1"></div>
                                <div class="stick stick-2"></div>
                                <div class="stick stick-3"></div>
                            </div>
                        </div>
                        <div class="team-item-title">
                            <h5>Nombre Random</h5>
                        </div>
                        <div class="team-item-text-subtitle">
                            <p>Front-end developer</p>
                        </div>
                        
                    </div>
                    <div class="team-item">
                        <div class="team-item-image">
                            <picture>
                                <img src="./img/team2.webp" alt="" />
                            </picture>
                            <div class="team-social-networks">
                                <div class="stick stick-1"></div>
                                <div class="stick stick-2"></div>
                                <div class="stick stick-3"></div>
                            </div>
                        </div>
                        <div class="team-item-title">
                            <h5>Nombre Random</h5>
                        </div>
                        <div class="team-item-text-subtitle">
                            <p>Back-end Developer</p>
                        </div>
                       
                    </div>
                    <div class="team-item">
                        <div class="team-item-image">
                            <picture>
                                <img src="./img/team3.webp" alt="" />
                            </picture>
                            <div class="team-social-networks">
                                <div class="stick stick-1"></div>
                                <div class="stick stick-2"></div>
                                <div class="stick stick-3"></div>
                            </div>
                        </div>
                        <div class="team-item-title">
                            <h5>Nombre Random</h5>
                        </div>
                        <div class="team-item-text-subtitle">
                            <p>Full Stack Developer</p>
                        </div>
                        
                    </div>
                    <div class="team-item">
                        <div class="team-item-image">
                            <picture>
                                <img src="./img/team4.webp" alt="" />
                            </picture>
                            <div class="team-social-networks">
                                <div class="stick stick-1"></div>
                                <div class="stick stick-2"></div>
                                <div class="stick stick-3"></div>
                            </div>
                        </div>
                        <div class="team-item-title">
                            <h5>Nombre Random</h5>
                        </div>
                        <div class="team-item-text-subtitle">
                            <p>SEO</p>
                        </div>
                       
                    </div>
                </div>
            </div>
      `;
    }
  }
  
  customElements.define("team-component", TeamComponent);