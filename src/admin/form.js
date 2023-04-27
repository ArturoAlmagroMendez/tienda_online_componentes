class Form extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        .form-data{
            display:flex;
            justify-content: space-between;
            margin-bottom: 2rem;
        }
        .form-data label,
        .form-password label{
            font-family: 'Poppins' , sans-serif;
            font-size:1.5rem;
        }
        input{
            background-color: hsl(194, 57%, 58%);
            font-family: 'Poppins' , sans-serif;
            font-size: 1.6rem;
            padding:1.5rem 0;
            width:100%;
        }
        .form-data .admin-form-username,
        .form-data .admin-form-email{
            display: flex;
            flex-direction: column;
            gap:0.5rem;
            width: 45%;
        }
        .form-password{
            display:flex;
            justify-content: space-between;
        }
        .form-password .admin-form-password,
        .form-password .admin-form-password-check{
            display: flex;
            flex-direction: column;
            gap:0.5rem;
            width: 45%;
        }
        .admin-content-aside-item-content span{
            font-family: 'Poppins' , sans-serif;
            font-size: 1.2rem;
        }
        </style>
        <div class="form-data">
            <div class="admin-form-username">
                <label>Usuario</label>
                <input type="text" name="username" data-validate="only-letters">
            </div>
            <div class="admin-form-email">
                <label>Email</label>
                <input type="email" name="email" data-validate="email">
            </div>
        </div>
        <div class="form-password">
            <div class="admin-form-password">
                <label>Contraseña</label>
                <input type="password" name="password">
            </div>
            <div class="admin-form-password-check">
                <label>Repetir Contraseña</label>
                <input type="password" name="password">
            </div>
        </div>
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
  
  
  }
  
  customElements.define("form-component", Form);
  
  