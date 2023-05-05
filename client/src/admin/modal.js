class ModalComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        .modal{
            width:20%;
            height:30%;
            background-color:aquamarine;
            border:1px solid black;
            position:absolute;
            top:20%;
            left:40%;
            display:none;
            padding:2rem 4rem;
        }
        .modal.active{
            display:flex;
            justify-content:center;
            flex-direction:column;
            align-items:center;
            gap:1rem;
        }
        .modal-text{
          width:100%;
          font-family:'Poppins', sans-serif;
          color:black;
          font-size:1rem;
        }
       
        </style>
        <div class="modal">
            <div class="modal-text">
                <slot name="content"></slot>
            </div>
            <div class="modal-buttons">
              <div class="close-button">
                <slot name="close"></slot>
              </div>
              <div class="confirm-button">
                <slot name="confirm"></slot>
              </div>
            </div>
        </div>
      `;
    }
    connectedCallback() {
      document.addEventListener("deleteButtonClicked", () => {
        const modalComponent = document.querySelector("modal-component");
        if (modalComponent) {
          modalComponent.shadowRoot.querySelector(".modal").classList.add("active");
        }
      });
      document.addEventListener("closeButtonClicked", () => {
        const modalComponent = document.querySelector("modal-component");
        if (modalComponent) {
          modalComponent.shadowRoot.querySelector(".modal").classList.remove("active");
        }
      });
      document.addEventListener("confirmButtonClicked", () => {
        const modalComponent = document.querySelector("modal-component");
        if (modalComponent) {
          alert("Eliminado correctamente");
          modalComponent.shadowRoot.querySelector(".modal").classList.remove("active");
        }
      });
      
    }
    
  }
  
  customElements.define("modal-component", ModalComponent);

