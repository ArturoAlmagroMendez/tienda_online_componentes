class FlipCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .flip-card {
            width: 300px;
            height: 400px;
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
          
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
          }
          
          .flip-card-front {
            background-color: #bbb;
            color: black;
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
        
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <button id="contact-btn">Contact Us</button>
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
  }
  
  customElements.define('flip-card', FlipCard);