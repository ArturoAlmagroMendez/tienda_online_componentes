class OnePageScroll extends HTMLElement {
    constructor() {
      super();
      this.pages = document.querySelectorAll('[data-page]');
      this.currentPage = 0;
      this.button = null;
    }
  
    connectedCallback() {
      this.button = document.createElement('button');
      this.button.textContent = 'Desplazarse hacia abajo';
      this.button.addEventListener('click', this.scrollToNextPage.bind(this));
      this.appendChild(this.button);
  
      window.addEventListener('scroll', this.checkButtonVisibility.bind(this));
    }
  
    scrollToNextPage() {
      this.currentPage = (this.currentPage + 1) % this.pages.length;
      const nextPageTop = this.pages[this.currentPage].offsetTop;
      window.scrollTo({
        top: nextPageTop,
        behavior: 'smooth',
      });
    }
  
    scrollToPreviousPage() {
      this.currentPage = (this.currentPage - 1 + this.pages.length) % this.pages.length;
      const previousPageTop = this.pages[this.currentPage].offsetTop;
      window.scrollTo({
        top: previousPageTop,
        behavior: 'smooth',
      });
    }
  
    checkButtonVisibility() {
      const lastPage = this.pages[this.pages.length - 1];
      const isAtLastPage = window.innerHeight + window.pageYOffset >= lastPage.offsetTop + lastPage.offsetHeight;
      
      if (isAtLastPage) {
        this.button.removeEventListener('click', this.scrollToNextPage.bind(this));
        this.button.addEventListener('click', this.scrollToPreviousPage.bind(this));
        this.button.textContent = 'Desplazarse hacia arriba';
      } else {
        this.button.removeEventListener('click', this.scrollToPreviousPage.bind(this));
        this.button.addEventListener('click', this.scrollToNextPage.bind(this));
        this.button.textContent = 'Desplazarse hacia abajo';
      }
    }
  }
  
  customElements.define('one-page-scroll', OnePageScroll);
  