

class Table extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.values = this.getAttribute("data-values") ? JSON.parse(this.getAttribute("data-values")) : [];
      console.log('values:', this.values);
      this.render();
    }
    render() {
        
      // Método que genera el código HTML del componente
      this.shadowRoot.innerHTML = `
      <style>
      .admin-content-table {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        width: 100%;
      }
      
      .table-item {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      
      .table-item-header {
        background-color: hsl(194, 57%, 58%);
        display: flex;
        justify-content: flex-end;
        padding: .5rem .3rem;
      }
      
      .table-item-content {
        background-color: hsl(214, 58%, 52%);
        padding: 1rem;
      }
      
      .edit-button,
      .delete-button {
        cursor: pointer;
        height: 2rem;
        width: 2rem;
      }
      
      .edit-button svg,
      .delete-button svg {
        height: 100%;
        width: 100%;
      }
      
      .table-item-header .delete-button {
        padding: 0 .5rem;
      }
      </style>
      <div class="admin-content-table">
      ${this.values
        .map(
          (value) => `
            <div class="table-item">
              <div class="table-item-header">
                <div class="edit-button"><svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 192 192" xml:space="preserve" fill="none"><path d="m104.175 90.97-4.252 38.384 38.383-4.252L247.923 15.427V2.497L226.78-18.646h-12.93zm98.164-96.96 31.671 31.67" class="cls-1" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" transform="translate(-77.923 40.646)"/><path d="m195.656 33.271-52.882 52.882" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="translate(-77.923 40.646)"/></svg></div>
                <div class="delete-button"><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 56 56"><path d="M 44.5235 48.6602 L 46.1407 14.3945 L 48.4844 14.3945 C 49.4454 14.3945 50.2187 13.5976 50.2187 12.6367 C 50.2187 11.6758 49.4454 10.8555 48.4844 10.8555 L 38.2422 10.8555 L 38.2422 7.3398 C 38.2422 3.9883 35.9688 1.8086 32.3595 1.8086 L 23.5938 1.8086 C 19.9844 1.8086 17.7344 3.9883 17.7344 7.3398 L 17.7344 10.8555 L 7.5391 10.8555 C 6.6016 10.8555 5.7813 11.6758 5.7813 12.6367 C 5.7813 13.5976 6.6016 14.3945 7.5391 14.3945 L 9.8829 14.3945 L 11.5000 48.6836 C 11.6641 52.0586 13.8907 54.1914 17.2657 54.1914 L 38.7579 54.1914 C 42.1095 54.1914 44.3595 52.0351 44.5235 48.6602 Z M 21.4844 7.5742 C 21.4844 6.2383 22.4688 5.3008 23.8751 5.3008 L 32.1016 5.3008 C 33.5313 5.3008 34.5157 6.2383 34.5157 7.5742 L 34.5157 10.8555 L 21.4844 10.8555 Z M 17.6173 50.6758 C 16.2579 50.6758 15.2500 49.6445 15.1797 48.2852 L 13.5391 14.3945 L 42.3907 14.3945 L 40.8438 48.2852 C 40.7735 49.6680 39.7891 50.6758 38.4063 50.6758 Z M 34.9610 46.5508 C 35.7344 46.5508 36.3204 45.9180 36.3438 45.0273 L 37.0469 20.2773 C 37.0704 19.3867 36.4610 18.7305 35.6641 18.7305 C 34.9376 18.7305 34.3282 19.4102 34.3048 20.2539 L 33.6016 45.0273 C 33.5782 45.8711 34.1641 46.5508 34.9610 46.5508 Z M 21.0626 46.5508 C 21.8595 46.5508 22.4454 45.8711 22.4219 45.0273 L 21.7188 20.2539 C 21.6954 19.4102 21.0626 18.7305 20.3360 18.7305 C 19.5391 18.7305 18.9532 19.3867 18.9766 20.2773 L 19.7032 45.0273 C 19.7266 45.9180 20.2891 46.5508 21.0626 46.5508 Z M 29.4298 45.0273 L 29.4298 20.2539 C 29.4298 19.4102 28.7969 18.7305 28.0235 18.7305 C 27.2500 18.7305 26.5938 19.4102 26.5938 20.2539 L 26.5938 45.0273 C 26.5938 45.8711 27.2500 46.5508 28.0235 46.5508 C 28.7735 46.5508 29.4298 45.8711 29.4298 45.0273 Z"/></svg></div>
              </div>
              <div class="table-item-content">
                <div class="table-email"><span>Email: ${value.email}</span></div>
                <div class="table-name"><span>Name: ${value.name}</span></div>
                <div class="table-surname"><span>Apellidos: ${value.surname}</span></div>
              </div>
            </div>
          `
        )
        .join("")}
        </div>
    
      `;
      const tableItems = this.shadowRoot.querySelectorAll(".table-item-content");
        tableItems.forEach((tableItem, index) => {
        tableItem.querySelector('.table-email').innerHTML = `Email: ${this.values[index].email}`;
        tableItem.querySelector('.table-name').innerHTML = `Name: ${this.values[index].name}`;
        tableItem.querySelector('.table-surname').innerHTML = `Apellidos: ${this.values[index].surname}`;
        });

      const deleteButtons = this.shadowRoot.querySelectorAll(".delete-button");

      deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", () => {
          this.dispatchEvent(
            new CustomEvent("deleteButtonClicked", {
              bubbles: true,
              composed: true,
            })
          );
        });
      });
      
    }
    connectedCallback() {

    }
  }
  
  customElements.define("table-component", Table);
  
  


