import {API_URL} from "../config/config.js"

class sidebarMenu extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.menu = this.getAttribute('menu');
      this.menuItems = [];
    }
    // El constructor se cierra siempre
  
    connectedCallback() {

      this.loadData().then(() => this.render());

      // Renderizas, y debajo añades el código precedido de render (){

      this.shadow.querySelectorAll('.drowpdown-element-button').forEach(button => {
        button.addEventListener('click', this.toggleDropdown);
      });
    }
    // Agrega la palabra clave async delante de la declaración de la función loadData(). Esto indica que la función es asíncrona y que se puede utilizar con la palabra clave await dentro de ella.
    // Utiliza la función fetch() para realizar una solicitud HTTP a la URL especificada. En este caso, la URL puede ser una variable o una constante que contenga la URL de tu API.
    // Utiliza el método json() en la respuesta del fetch para convertir los datos recibidos en un objeto JSON.
    // Asigna el objeto JSON a una propiedad de tu componente para poder acceder a los datos más adelante.
    // En resumen, utilizando la palabra clave async antes de una función te permite utilizar await dentro de ella para esperar a que una promesa se resuelva antes de continuar con el código. En este caso, estamos esperando a que la respuesta del fetch se complete antes de convertirla en un objeto JSON y guardarlo en una propiedad del componente.
    async loadData(){

      let url = `${API_URL}/api/admin/menus/display/${this.menu}`

      let response = await fetch( url, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
            'Content-Type': 'application/json',
        }
      });

      let data = await response.json();
      this.menuItems = Object.values(data);
      // una vez que los datos se han cargado correctamente, podrás acceder a ellos a través de la propiedad this.data. Por ejemplo, en el método render de tu componente, podrías utilizar estos datos para mostrarlos en la interfaz.
    }

    render(){
      
      // Dentro de this.shadow.innerHTML introduces el CSS (no el SASS, cuidado)
      this.shadow.innerHTML = `
        <style>
        //Código css
        </style>
        <div>
        //Código html
        </div>
    	`;

    let list = this.shadow.querySelector(".sidebar-categories ul");

    this.menuItems.forEach(menuItem => {

      let listItem = document.createElement("li");
      listItem.classList.add ("sidebar-element");

      let link = document.createElement('a');
      link.classList.add("sidebar-menu-item");

      link.href = menuItem.customUrl;
      link.name = menuItem.name;
      link.textContent = menuItem.name;

      link.setAttribute("href", menuItem.customUrl);
      link.textContent = menuItem.name;

      listItem.appendChild(link);

      this.createSubMenu(menuItem, listItem); 

      list.appendChild(listItem);
    });

    this.shadow.querySelectorAll('a').forEach(link => {

      link.addEventListener("click", (event) => {

          event.preventDefault();

          document.dispatchEvent(new CustomEvent('newUrl', {
              detail: {
                  url: link.getAttribute("href"),
                  title: link.textContent,
              }
          }));
      });
    });
  }

  createSubMenu(menuItem, li) {

    if (menuItem.children) {

      let subMenu = document.createElement('ul');
      subMenu.classList.add("sidebar-drowpdown","drowpdown-related");
      li.append(subMenu);

      Object.values(menuItem.children).forEach(subMenuItem => {

          let subLi = document.createElement('li');
          let subLink = document.createElement('a');
          subLi.classList.add("sidebar-option");

          subLink.setAttribute("href", subMenuItem.customUrl);
          subLink.textContent = subMenuItem.name;

          subLi.appendChild(subLink);
          subMenu.appendChild(subLi);

          this.createSubMenu(subMenuItem, subLi); 
      });

      subMenu.addEventListener('click', () => {

        let drowpdownElement = this.shadow.querySelectorAll('.drowpdown-element');

        drowpdownElement.forEach(element => {
          drowpdownElement.querySelector('.drowpdown-element-button').classList.remove('active');
          drowpdownElement.querySelector('.drowpdown-related').classList.remove('active');
          drowpdownElement.classList.remove('item-animated');
        });


        subMenu.querySelector('.drowpdown-element-button').classList.add('active');
        subMenu.querySelector('.drowpdown-related').classList.remove('active');
        subMenu.lassList.remove('item-animated');
			});

      li.appendChild(subMenu);
    }
  }


	// Este código es una función recursiva que crea un submenú a partir de un elemento de menú dado. 
	// function createSubmenu(menuItem, ) {
	// 	if (menuItem.children) {
	// 		// La función comprueba si el elemento de menú tiene hijos, y si es así, crea un elemento "ul" y le añade dos clases CSS.
	// 		let sidebarChildren = document.createElement("ul");
	// 		sidebarChildren.classList.add("sidebar-drowpdown");
	// 		sidebarChildren.classList.add("drowpdown-related");
	// 		//  Luego, itera a través de los hijos del elemento de menú y para cada hijo, crea un elemento "li", le añade una clase CSS y establece su contenido de texto en el nombre del hijo
	// 		menuItem.children.forEach(element => {
	// 			let sidebarChildrenLi = document.createElement("li");
	// 			sidebarChildrenLi.classList.add("sidebar-option");
	// 			sidebarChildrenLi.textContent = element.name;
	// 			sidebarChildren.append(sidebarChildrenLi);
	// 			// Finalmente, llama a la función de nuevo con cada hijo para crear submenús adicionales si es necesario.
	// 			createSubmenu(element);


				// TODO INCLUIR CUSTOMURL POR SI EL SUBMENÚ CUENTA CON ÉL
				// TODO introducir la función
	// 	  	});
	// 	}
	// }

    disconnectedCallback() {
      	this.shadowRoot.querySelectorAll('.drowpdown-element-button').forEach(button => {
        button.removeEventListener('click', this.toggleDropdown);
      	});
        // disconnectedCallback es un método de una clase de Web Component que se llama automáticamente cuando el elemento personalizado se desconecta del DOM y se utiliza para limpiar los eventos y recursos asociados con el componente antes de su eliminación.
    }
    toggleDropdown(event) {
		event.preventDefault();
		const parent = event.target.parentNode.parentNode;
		parent.classList.toggle('active');
		event.target.classList.toggle('active');
      
    }
}
customElements.define('sidebar-menu', sidebarMenu);