class Form extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

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
        const target = item.dataset.target;
        const targetElement = this.shadowRoot.getElementById(target);
        targetElement.classList.add("active");
        item.classList.add("active");
        item.parentElement.classList.add("active");
      });
    });

    this.shadowRoot
      .querySelector(".clean-button")
      .addEventListener("click", () => {
        const formElement = this.shadowRoot.getElementById("my-form");
        formElement.reset();
        alert("Se ha limpiado el formulario");
      });

    const saveButton = this.shadowRoot.querySelector(".save-button");
    saveButton.addEventListener("click", () => {
      alert("Se han guardado los datos del formulario correctamente.");
    });
  }

  render() {
    const defaultTabs = [
      {
        title: "Principal",
        content: `
            <div class="form-data">
              <div class="form-element">
                <label>Nombre de usuario:</label>
                <input type="text" name="username1" required />
              </div>
              <div class="form-element">
                <div class="form-element-label">
                  <label>Correo electrónico:</label>
                </div>
                <div class="form-element-input">
                  <input type="email" name="email1" required />
                </div>
              </div>
            </div>
            <div class="form-data">
              <div class="form-element">
                <div class="form-element-label">
                  <label>Contraseña:</label>
                </div>
                <div class="form-element-input">
                  <input type="password" name="password1" required />
                </div>
              </div>
              <div class="form-element">
                <div class="form-element-label">
                  <label>Confirmar contraseña:</label>
                </div>
                <div class="form-element-input">
                  <input type="password" name="passwordCheck1" required />
                </div>
              </div>
            </div>
          `,
      },
      {
        title: "Imágenes",
        content: `
        <div class="form-data">
          <div class="form-element">
            <div class="form-element-label">
              <label for="file-input">Subir archivo:</label>
            </div>
            <div class="form-element-input">
              <input type="file" id="file-input" name="file-input">
            </div>
          </div>
        </div>
          `,
      },
    ];
    this.shadowRoot.innerHTML = `
        <style>
       
          .admin-content-login {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            gap:3rem;

          }
          .tabs-menu {
            align-items: center;
            width:100%;
            background-image: linear-gradient(to right top, #00bdff, #4ac8fd, #6ed2fc, #8bdcfb, #a7e6fb);
            display: flex;
            height: 10%;
            justify-content: space-between;
          }
          .tabs-menu .tabs {
            color: #000;
            display: flex;
            gap: 1rem;
            height: 100%;
          }
          .tabs-menu .tabs ul {
            display: flex;
            gap: 1rem;
            height: 100%;
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .tabs-menu .tabs ul li {
            align-items: center;
            display: flex;
            height: 100%;
          }
          .tabs-menu .tabs ul li a {
            color: #000;
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            text-decoration: none;

          padding:0 2rem;
          }
          .tab-link {
            align-items: center;
            cursor: pointer;
            display: flex;
            height: 100%;
          }
          .tab-link.active {
            background-color: #fff;
            border:2px solid black;
          }
          .tab-link span {
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            font-weight: 300;
            padding: 0 .6rem;
          }
          .tabs-menu .buttons {
            display: flex;
            gap: 1rem;
            padding: .5rem 1rem;
          }
          .buttons .clean-button,
          .buttons .save-button {
            height: 2rem;
            width: 2rem;
            cursor: pointer;
          }
          .buttons .clean-button svg,
          .buttons .save-button svg {
            height: 100%;
            width: 100%;
          }
          .buttons .clean-button svg:hover,
          .buttons .save-button svg:hover{
            fill:blue;
          }
          .tab-content {
            display: none;
            width: 100%;
          }
          .tab-content.active {
            display: block;
          }
          #my-form {
            width: 100%;
            height: 100%;
            display:flex;
            flex-direction: column;
          }
          .form-element-label,
          .form-element-input {
            width: 100%;
          }
          .form-data {
            display: flex;
            justify-content: space-between;
            padding: 0 5%;
            width:90%;
          }
          .form-data label {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
          }
          input {
            background-color:#00a0ff;
            font-family: 'Poppins', sans-serif;
            font-size: 1.4rem;
            width: 100%;
            border:none;
            border-bottom: 2px solid #fff;
          }        
          .form-data .form-element{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 45%;
            margin-bottom:2rem;
          }
          .form-element-input{
            width:100%;
          }
          form-element-label{
            width:100%;
          }
         
      </style>
      <div class="admin-content-login">
        <div class="tabs-menu">
          <div class="tabs">
            <ul>
            ${defaultTabs
              .map(
                (tab, index) => `
                  <li${index === 0 ? ' class="active"' : ""}>
                    <a href="#" data-target="tab${index + 1}" class="tab-link${
                  index === 0 ? " active" : ""
                }">${tab.title}</a>
                  </li>`
              )
              .join("")}
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
                <path d="M14.164 0h-12.664c-0.827 0-1.5 0.673-1.5 1.5v13.5c0 0.827 0.673 1.5 1.5 1.5h12.664c0.827 0 1.5-0.673 1.5-1.5v-13.5c0-0.827-0.673-1.5-1.5-1.5zM7 14.242l-5.121-5.121 1.414-1.414 3.707 3.707 6.293-6.293 1.414 1.414-7.707 7.707z"></path>
              </svg>
            </div>
          </div>
        </div>
        <form id="my-form">
        ${defaultTabs
          .map(
            (tabContent, index) => `
              <div class="tab-content${index === 0 ? " active" : ""}" id="tab${
              index + 1
            }">
                ${tabContent.content}
              </div>`
          )
          .join("")}
        </form>
        </div>
      </div>`;
  }
}

customElements.define("form-component", Form);
