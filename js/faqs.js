class FaqsComponent extends HTMLElement {
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
toggleQuestion(e) {
  const question = e.target.closest(".question");
  const answer = question.nextElementSibling;
  const symbol = question.querySelector(".question-symbol svg");

  question.classList.toggle("active");
  if (answer) {
    answer.style.display = question.classList.contains("active") ? "block" : "none";
    answer.style.height = question.classList.contains("active") ? "auto" : "0";
  }
  if (symbol) {
    symbol.innerHTML = question.classList.contains("active")
      ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>minus</title><path d="M19,13H5V11H19V13Z" /></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>';
  }
}
  connectedCallback() {
    this.render();
    const questions = this.shadowRoot.querySelectorAll(".question");
    questions.forEach(question => question.addEventListener("click", this.toggleQuestion.bind(this)));
  }
  render() {
    // Método que genera el código HTML del componente
    this.shadowRoot.innerHTML = `
    <style>
      .faqs{
          display:flex;
          flex-direction:column;
          height:90vh;
          padding:0 10%;
          text-align:start;   
          width:80%;
      }
      .faqs .faqs-title{
          text-align:center;
      }
      .faqs .faqs-title h4{
          color:#353C6D;
          font-size:3rem;
          margin:0;
      }
      .faqs .faqs-description{
          padding:0 25%;
          text-align:center; 
          margin-bottom:3rem;
      }
      .faqs .faqs-description p{
          color:#6F5E73;
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
      }
      .faqs .faqs-item .question {
          align-items:center;
          display:flex;
          flex-wrap:wrap;
          gap:1rem;
          justify-content:space-between;
      }
      .faqs .faqs-item .question.active .question-title h5 ,
      .faqs .faqs-item .question.active .question-symbol span{
          color:#353C6D;
      }
      .faqs .faqs-item .question .question-title h5 ,
      .faqs .faqs-item .question .question-symbol span{
          margin:0;
      }
      .faqs .faqs-content .divider{
          background-color:#6F5E73;
          height:1px;
          opacity:.3;
          width:100%;
      }
      .faqs .faqs-item .question .question-title h5{
          color:#6F5E73;
          font-size:1.7rem;
          font-weight:600;
      }
      .faqs .faqs-item .question .question-symbol{
          cursor:pointer;
          width:2rem;
      }
      .faqs .faqs-item .question .question-symbol svg{
          fill:#6F5E73;
          width:100%;
      }
      .faqs .faqs-content .faqs-item .answer{
          padding-right:1rem;
          display:none;
      }
      .faqs .faqs-content .faqs-item .answer p{
          color:#6F5E73;
          font-size:1.2rem;
      }

    </style>
      <div class="faqs">
          <div class="faqs-title">
              <h4>Bootstrap 5 FAQ</h4>
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
                      <div class="question-symbol">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                      </div>
                      <div class="divider"></div>
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
                      <div class="question-symbol">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                      </div>
                      <div class="divider"></div>
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
                      <div class="question-symbol">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                      </div>
                      <div class="divider"></div>
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
                      <div class="question-symbol">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                      </div>
                      <div class="divider"></div>
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
  
customElements.define("faqs-component", FaqsComponent);
