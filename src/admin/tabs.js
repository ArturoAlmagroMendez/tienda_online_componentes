class Tabs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  render() {
    // Método que genera el código HTML del componente
    const tabsJSON = this.getAttribute("tabs");
    const tabs = tabsJSON ? JSON.parse(tabsJSON) : ["Tab 1", "Tab 2" ,"Tab 3" , "Tab 4"];
    this.shadowRoot.innerHTML = `
        <style>
        .admin-content-login{
            display: flex;
            flex-direction: column;
            gap:1rem;
            height:100%;
            padding:.5rem 0;
            width:100%;
        }
        .tabs-menu{
            align-items:center;
            background-color: hsl(0, 0%, 100%);
            display:flex;
            height: 10%;
            justify-content: space-between;
            padding:0 .5rem;
        }
        .tabs-menu .tabs{
            color:#000;
            display:flex;
            gap:1rem;
            height: 100%;
        }
        .tabs-menu .tabs ul{
            display: flex;
            gap:1rem;
            height: 100%;
            list-style:none;
            margin:0;
        }
        .tabs-menu .tabs ul li{
            align-items: center;
            display: flex;
            height: 100%;
        }
        .tabs-menu .tabs ul li a{
            color:#000;
            font-family: 'Poppins' ,sans-serif;
            font-size: 1.5rem;
            text-decoration: none;
        }
        .tab-link{
            align-items: center;
            cursor: pointer;
            display: flex;
            height: 100%;
        }
        .tab-link.active{
            background-color: rgb(36, 92, 177);
        }
        .tab-link span{
            font-family: 'Poppins' , sans-serif;
            font-size: 1.5rem;
            font-weight: 300;
            padding:0 .6rem;
        }
        .tabs-menu .buttons{
            display: flex;
            gap:1rem;
            justify-content: end;
            padding:.5rem 1rem;
        }
        .buttons .clean-button,
        .buttons .save-button{
            height:2rem;
            width:2rem;
            cursor:pointer;
        }
        .buttons .clean-button svg,
        .buttons .save-button svg{
            height:100%;
            width:100%;
        }
        .tab-content{
            display: none;
            gap:2rem;
            width:100%;
        }
        .tab-content.active{
            display:block;
        }
        
        
        
        </style>
        <div class="admin-content-login"> 
            <div class="tabs-menu">
                <div class="tabs">
                    <ul>
                        ${tabs
                            .map(
                                (tab, index) => `
                                    <li>
                                        <div class="tab-link${index === 0 ? " active" : ""}">
                                            <a class="tab${index === 0 ? " active" : ""}" data-target="tab${index + 1}">${tab}</a>
                                        </div>
                                    </li>`
                            ).join("")}
                    </ul>            
                </div>
                <div class="buttons">
                    <div class="clean-button">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="" width="" version="1.1" id="Capa_1" viewBox="0 0 387.113 387.113" xml:space="preserve">
                            <g>
                                <path style="fill:#010002;" d="M232.055,321.716L387.11,166.661L220.455,0L0.003,220.452l166.661,166.661l2.47-2.47h151.218   v-11.934H181.062L232.055,321.716z M370.235,166.655L232.055,304.835l-149.78-149.78L220.455,16.874L370.235,166.655z"/>
                            </g>
                            </svg>
                    </div>
                    <div class="save-button">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="" height="" viewBox="0 0 17 17" version="1.1">
                            <path d="M14.164 0h-12.664c-0.827 0-1.5 0.673-1.5 1.5v14c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-12.724l-2.836-2.776zM8 1v4h3v-4h1v5h-8v-5h4zM3 16v-6h11v6h-11zM16 15.5c0 0.275-0.225 0.5-0.5 0.5h-0.5v-7h-13v7h-0.5c-0.276 0-0.5-0.225-0.5-0.5v-14c0-0.275 0.224-0.5 0.5-0.5h1.5v6h10v-6h0.756l2.244 2.196v12.304z" fill="#000000"/>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- *****PENDIENTE MEJORAR LA FORMA EN QUE SE PASAN POR PARÁMETRO LOS TAB-CONTENT y como se asocian a su TAB-LINK correspondiente ***** --!>
            <div class="tab-content active" id="tab1">
                <form-component></form-component>
            </div>
            <div class="tab-content" id="tab2">
                <input type="file">
            </div>
            <div class="tab-content" id="tab3"></div>
            <div class="tab-content" id="tab4"></div>
        </div>

      `;
    // const formComponent = document.createElement('form-component');
    // this.shadowRoot.getElementById('tab1').appendChild(formComponent);
  }
  connectedCallback() {
    this.render();
    // Método que se ejecuta cuando el componente se agrega al DOM
    const tabs = this.shadowRoot.querySelectorAll(".tabs ul li a");
    const tabsContent = this.shadowRoot.querySelectorAll(".tab-content");
    tabs.forEach((item) => {
        item.addEventListener("click", () => {
          tabsContent.forEach((tabContent) => {
            tabContent.classList.remove("active");
          });
          tabs.forEach((tab) => {
            tab.classList.remove("active");
            tab.parentElement.classList.remove("active");
          });
          console.log(item);
          const target = item.dataset.target;
          const targetElement = this.shadowRoot.getElementById(target);
          targetElement.classList.add("active");
          item.classList.add("active");
          item.parentElement.classList.add("active");
        });
      });
      // Seleccionar y mostrar el contenido de la pestaña "Principal"


    this.shadowRoot.querySelector('.clean-button').addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("cleanButtonClicked", {
            bubbles: true,
            composed: true,
          })
        );
      });
      const saveButton = this.shadowRoot.querySelector(".save-button");
        saveButton.addEventListener('click' , () =>{
          alert("Se han guardado los datos del formulario correctamente.");
        });

  }

}

customElements.define("tabs-component", Tabs);
