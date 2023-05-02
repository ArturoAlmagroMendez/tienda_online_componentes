class confirmButtonComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const buttonContent = this.getAttribute("button-content") || "OK";
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        #confirm{
            border:none;
            width:100%;
            padding:1rem 2rem;
            text-align:center;
            display:flex;
            align-items:center;
            height:3rem;
            background-color:blue;
            color:#fff;
        }
        #confirm:hover{
            background-color:black;
        </style>
        <button id="confirm">${buttonContent}</button>
      `;
    }
    connectedCallback() {
        this.shadowRoot.getElementById('confirm').addEventListener("click", () => {
            this.dispatchEvent(
              new CustomEvent("confirmButtonClicked", {
                bubbles: true,
                composed: true,
              })
            );
          });
    }
  
  
  
  
  }
  
  customElements.define("confirm-button-component", confirmButtonComponent);
  
