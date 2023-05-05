class CloseButtonComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        .modal-close-button{
            border:none;
            width:1.8rem;
            height:1.8rem;
            background-color:blue;
            color:#fff;
            top:5%;
            position:absolute;
            left:90%;
        }
        .modal-close-button:hover{
            background-color:black;
        }
        </style>
        <button id="closeButton" class="modal-close-button">X</button>
      `;

    }
    connectedCallback() {
        this.shadowRoot.querySelector("#closeButton").addEventListener("click", () => {
          this.dispatchEvent(
            new CustomEvent("closeButtonClicked", {
              bubbles: true,
              composed: true,
            })
          );
        });
      }
      
  }
  
  customElements.define("close-button-component", CloseButtonComponent);
  
