class DetailsComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      
    }
    
    render() {
        // Método que genera el código HTML del componente
        this.shadowRoot.innerHTML = `
          <style>
            .details {
              display: flex;
              margin: 0 auto;
              padding: 10% 0;
              width: 80%;
            }
            .details .details-column {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
              justify-content: space-between; 
              width:33%;
            }
            .details .details-column .details-column-item {
              display: flex;
              gap: 2rem;
            }
            .details .details-column .details-column-item .details-item-svg {
              height: 3rem;
              width: 3rem;
            }
            .details
              .details-column
              .details-column-item
              .details-item-description
              .details-item-description-title h5 {
              font-size: 2rem;
              margin:0;
            }
            .details
              .details-column
              .details-column-item
              .details-item-description
              .details-item-description-title h5{
              font-weight: bold;
              font-size: 1.8rem;
            }
            .details-column .details-image {
              width:90%;
              padding: 0 5%;
            }
            .details-column .details-image img {
              width: 100%;
              height: 100%;
              border-radius: 20px;
            }
            .details
              .details-column
              .details-column-item
              .details-item-description
              .details-item-description-text{
                  font-size:1.1rem;
             }
            
          </style>
              <div class="details">
                      <div class="details-column">
                          <div class="details-column-item">
                              <div class="details-item-svg">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                      height="48px" width="48px" version="1.1" id="Layer_1" viewBox="0 0 392.577 392.577"
                                      xml:space="preserve">
                                      <path style="fill:#FFC10D;"
                                          d="M103.4,254.513c-3.879-4.008-10.731-4.461-15.386,0l-9.05,8.986l25.471,25.471  c4.267,4.267,4.267,11.119,0,15.386s-11.119,4.267-15.386,0l-25.471-25.471l-14.933,14.998l11.96,11.96  c4.267,4.267,4.267,11.119,0,15.386s-11.119,4.267-15.386,0l-11.96-11.895l-4.848,4.848c-8.727,8.727-8.727,23.014,0,31.806  l18.166,18.166c9.374,9.18,23.725,8.339,31.806,0l59.669-59.669c4.267-4.267,4.267-11.119,0-15.386L103.4,254.513z" />
                                      <g>
                                          <path style="fill:#FFFFFF;"
                                              d="M176.256,240.808c-9.18-7.111-17.455-15.321-24.501-24.501l-27.863,27.863l24.501,24.501   L176.256,240.808z" />
                                          <circle style="fill:#FFFFFF;" cx="258.163" cy="134.4" r="112.679" />
                                      </g>
                                      <path style="fill:#194F82;"
                                          d="M258.163,0c-74.214,0-134.4,60.121-134.4,134.4c0,22.885,5.689,44.412,15.838,63.289l-33.616,33.616  c-11.83-4.073-24.178-0.776-33.358,7.887l-59.669,59.669c-17.261,17.261-17.261,45.382,0,62.578l18.166,18.166  c17.39,17.842,47.063,16.743,62.578,0l59.669-59.669c8.986-8.986,11.507-21.915,7.822-33.228l33.745-33.745  c18.877,10.02,40.339,15.774,63.224,15.774c74.214,0,134.4-60.121,134.4-134.4S332.377,0,258.163,0z M138.05,304.549l-59.669,59.669  c-8.016,8.339-22.432,9.18-31.806,0L28.41,346.053c-8.727-8.727-8.727-23.014,0-31.806l4.848-4.848l11.96,11.96  c4.267,4.267,11.119,4.267,15.386,0s4.267-11.119,0-15.386l-11.96-11.96l14.998-14.998l25.471,25.471  c4.267,4.267,11.119,4.267,15.386,0s4.267-11.119,0-15.386l-25.471-25.471l8.986-8.986c4.655-4.461,11.507-4.008,15.386,0  l34.651,34.586C142.252,293.43,142.252,300.283,138.05,304.549z M123.893,244.17l27.927-27.927  c7.111,9.18,15.321,17.455,24.501,24.501l-27.927,27.927L123.893,244.17z M145.549,134.4c0-62.19,50.489-112.679,112.679-112.679  S370.842,72.145,370.842,134.4s-50.424,112.614-112.679,112.614S145.549,196.59,145.549,134.4z" />
                                      <path style="fill:#56ACE0;"
                                          d="M258.163,224.711c-24.113,0-46.804-9.438-63.935-26.44c-35.232-35.232-35.232-92.574,0-127.806  c17.067-17.067,39.822-26.44,63.935-26.44c24.113,0,46.804,9.438,63.935,26.44c35.232,35.232,35.232,92.574,0,127.806  C305.032,215.273,282.276,224.711,258.163,224.711z" />
                                      <g>
                                          <path style="fill:#194F82;"
                                              d="M251.699,76.541c3.556-3.556,9.438-3.556,12.994,0c4.719,4.59,12.024,4.008,15.386,0   c4.267-4.267,4.267-11.119,0-15.386c-12.024-12.024-31.741-12.024-43.83,0c-4.267,4.267-4.267,11.119,0,15.386   C240.579,80.808,247.432,80.808,251.699,76.541z" />
                                          <path style="fill:#194F82;"
                                              d="M327.012,89.794c-6.012,0-10.925,4.848-10.925,10.925c0,10.731-8.727,19.459-19.459,19.459   c-6.012,0-10.925,4.848-10.925,10.925c0,6.012,4.849,10.925,10.925,10.925c22.691,0,41.244-18.489,41.244-41.244   C337.937,94.707,333.088,89.794,327.012,89.794z" />
                                          <path style="fill:#194F82;"
                                              d="M264.305,161.293c4.267-4.267,4.267-11.119,0-15.386c-7.24-7.24-7.24-19.006,0-26.246   c4.267-4.267,4.267-11.119,0-15.386c-4.267-4.267-11.119-4.267-15.386,0c-15.774,15.774-15.774,41.309,0,57.083   C253.315,165.754,260.62,165.107,264.305,161.293z" />
                                          <path style="fill:#194F82;"
                                              d="M310.527,168.275c-5.56-2.392-11.895,0.129-14.287,5.624c-8.016,16.937-24.501,22.497-40.598,15.968   c-5.495-2.392-11.895,0.129-14.287,5.624c-2.392,5.495,0.129,11.895,5.624,14.287c25.471,11.572,58.44-0.259,69.236-27.345   C318.608,177.131,316.086,170.667,310.527,168.275z" />
                                          <path style="fill:#194F82;"
                                              d="M187.052,108.477c-5.43,2.715-7.499,9.244-4.784,14.61c3.879,7.434,0.84,18.295-7.434,22.109   c-5.43,2.715-7.564,9.18-4.913,14.61c2.521,5.172,9.762,7.434,14.61,4.913c18.101-8.145,27.604-32.065,17.131-51.459   C198.947,107.96,192.418,105.762,187.052,108.477z" />
                                      </g>
                                  </svg>
                              </div>
                              <div class="details-item-description">
                                  <div class="details-item-description-title"><h5>Sigue la mejor ruta</h5></div>
                                  <div class="details-item-description-text">
                                      <p>Te guiaremos por la mejor ruta para ser un programador de éxito.</p>
                                  </div>
                              </div>
                          </div>
                          <div class="details-column-item">
                              <div class="details-item-svg">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                      height="48px" width="48px" version="1.1" id="Layer_1" viewBox="0 0 392.517 392.517"
                                      xml:space="preserve">
                                      <path style="fill:#194F82;"
                                          d="M70.359,147.507c6.012,0,10.925-4.848,10.925-10.925V71.03l22.885,8.145v72.081  c0,6.012,4.848,10.925,10.925,10.925h1.099c5.301,39.564,39.24,70.141,80.226,70.141s74.861-30.578,80.226-70.141h0.84  c6.012,0,10.925-4.848,10.925-10.925V79.176l37.495-13.317c10.214-3.879,9.051-17.907,0-20.558L199.846,0.63  c-2.392-0.84-4.913-0.84-7.24,0L66.739,45.301c-4.331,1.552-7.24,5.624-7.24,10.279v80.873  C59.434,142.594,64.283,147.507,70.359,147.507z M196.291,210.537c-28.897,0-53.01-20.881-58.182-48.291h116.364  C249.365,189.657,225.252,210.537,196.291,210.537z M266.432,140.396H125.955V86.933l66.586,23.661c2.392,0.84,4.848,0.84,7.24,0  l66.586-23.661v53.463H266.432z M196.226,22.545l93.285,33.099l-93.285,33.099l-93.285-33.099L196.226,22.545z" />
                                      <path style="fill:#FFFFFF;"
                                          d="M138.109,162.246c5.107,27.41,29.22,48.291,58.182,48.291c28.897,0,53.01-20.881,58.182-48.291  H138.109z" />
                                      <g>
                                          <path style="fill:#56ACE0;"
                                              d="M192.606,110.529L126.02,86.869v53.463h140.541V86.869l-66.715,23.661   C197.454,111.37,194.998,111.37,192.606,110.529z" />
                                          <polygon style="fill:#56ACE0;"
                                              points="102.941,55.58 196.226,88.743 289.511,55.58 196.226,22.545  " />
                                      </g>
                                      <path style="fill:#FFC10D;"
                                          d="M313.43,370.796c7.046-0.129,11.055-5.56,10.925-10.796v-33.358c0-8.016-4.461-15.451-11.766-19.394  c-35.556-19.265-75.83-29.737-116.428-30.513c-40.21,0.776-80.42,11.378-115.976,30.513c-7.24,3.943-11.766,11.378-11.766,19.394  v33.228c0,6.012,4.848,10.925,10.925,10.925" />
                                      <path style="fill:#194F82;"
                                          d="M322.868,287.984c-38.659-20.881-82.295-32.323-126.836-33.164  c-44.024,0.84-87.725,12.283-126.319,33.164c-14.287,7.758-23.273,22.497-23.273,38.529v33.293  c0,18.036,14.675,32.711,32.711,32.711h234.214c17.842,0,32.711-14.352,32.711-32.711v-33.293  C346.141,310.545,337.22,295.677,322.868,287.984z M324.355,359.871c0.129,5.301-3.879,10.667-10.925,10.796h-24.954v-17.519  c0-6.012-4.848-10.925-10.925-10.925c-6.077,0-10.99,4.848-10.99,10.925v17.648H125.955v-17.648c0-6.012-4.848-10.925-10.925-10.925  c-6.077,0-10.925,4.848-10.925,10.925v17.648H79.151c-6.012,0-10.925-4.848-10.925-10.925v-33.293  c0-8.016,4.461-15.451,11.766-19.394c35.556-19.265,75.83-29.737,115.976-30.513c40.663,0.776,80.873,11.378,116.428,30.513  c7.24,3.943,11.766,11.378,11.766,19.394v33.293H324.355z" />
                                  </svg>
                              </div>
                              <div class="details-item-description">
                                  <div class="details-item-description-title"><h5>Formación adaptada</h5></div>
                                  <div class="details-item-description-text">
                                      <p>Aprende a tu ritmo y con atención personalizada.</p>
                                  </div>
                              </div>
                          </div>
                          <div class="details-column-item">
                              <div class="details-item-svg">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                      height="48px" width="48px" version="1.1" id="Layer_1" viewBox="0 0 392.587 392.587"
                                      xml:space="preserve">
                                      <path style="fill:#194F82;"
                                          d="M384.811,7.663c-27.604-27.539-103.758,23.596-162.909,82.683  c-34.069,34.069-62.255,70.659-77.64,100.59l-31.612,31.612c-24.954-5.495-51.523,2.392-69.689,20.299  c-13.576,13.576-13.188,32.388-12.8,52.299c0.517,26.182,1.099,53.333-26.505,78.222c-3.297,2.909-4.461,7.628-2.909,11.83  c2.78,6.982,8.663,7.693,15.063,7.305l0,0c22.109,0,96.97-3.103,134.077-43.249c18.101-19.523,24.566-45.446,19.717-68.978l32-32  c29.931-15.386,66.457-43.507,100.59-77.576C372.011,98.685,409.765,33.263,384.811,7.663z M133.789,334.386  c-23.984,25.988-70.723,33.358-98.392,35.491c17.455-26.246,16.937-53.85,16.549-75.119c-0.388-18.23-0.259-29.737,6.4-36.396  c20.234-20.558,55.273-21.204,75.701,0C154.411,278.725,154.347,312.147,133.789,334.386z M160.941,257.909  c-3.103-5.301-6.853-10.408-11.442-14.998c-4.655-4.655-9.632-8.404-14.804-11.507l25.6-25.6l26.44,26.376L160.941,257.909z   M286.678,155.121c-27.216,27.216-55.79,50.23-80.743,65.422l-34.069-34.069c11.055-18.101,26.182-38.012,44.024-58.053h45.899  c6.012,0,10.925-4.848,10.925-10.925c0-6.012-4.848-10.925-10.925-10.925h-25.341c0.323-0.323,0.517-0.517,0.84-0.84  c4.267-4.267,8.404-8.339,12.606-12.218h54.238c6.012,0,10.925-4.848,10.925-10.925c0-6.077-4.848-10.925-10.925-10.925h-29.608  c51.846-42.99,88.889-54.691,94.836-48.679C377.959,46.321,334.322,106.636,286.678,155.121z" />
                                      <path style="fill:#56ACE0;"
                                          d="M369.361,23.113c-6.012-6.012-42.99,5.689-94.836,48.679h29.608c6.012,0,10.925,4.848,10.925,10.925  c0,6.077-4.848,10.925-10.925,10.925h-54.238c-4.202,3.879-8.339,7.952-12.606,12.218c-0.323,0.323-0.517,0.517-0.84,0.84h25.341  c6.012,0,10.925,4.848,10.925,10.925c0,6.012-4.848,10.925-10.925,10.925H215.89c-17.842,20.04-32.97,39.952-44.024,58.053  l34.069,34.069c24.954-15.192,53.527-38.141,80.743-65.422C334.322,106.636,377.959,46.321,369.361,23.113z" />
                                      <path style="fill:#FFFFFF;"
                                          d="M160.941,257.909l25.729-25.729l-26.44-26.376l-25.6,25.6c5.172,3.168,10.214,6.853,14.804,11.507  C154.023,247.436,157.838,252.543,160.941,257.909z" />
                                      <path style="fill:#FFC10D;"
                                          d="M134.112,258.362c-20.493-21.204-55.467-20.558-75.701,0c-6.659,6.659-6.788,18.166-6.4,36.396  c0.453,21.269,1.034,48.808-16.549,75.119c27.669-2.069,74.408-9.503,98.392-35.491  C154.347,312.147,154.411,278.725,134.112,258.362z" />
                                      <path style="fill:#194F82;"
                                          d="M105.733,267.477c-4.267,4.267-4.267,11.119,0,15.451c8.145,8.145,8.016,21.075-0.323,30.061  c-4.461,4.848-11.442,8.727-20.687,11.572c-5.818,1.745-9.051,7.887-7.24,13.576c1.552,5.301,8.145,8.986,13.576,7.24  c12.994-3.943,23.208-9.891,30.384-17.648c16.162-17.455,15.968-43.96-0.323-60.251C116.852,263.21,109.999,263.21,105.733,267.477z  " />
                                  </svg>
                              </div>
                              <div class="details-item-description">
                                  <div class="details-item-description-title"><h5>Diseño profesional</h5></div>
                                  <div class="details-item-description-text">
                                      <p>Aprenderás a utilizar las últimas tecnologías de diseño web.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="details-column">
                          <div class="details-image">
                              <picture>
                                  <img src="./img/portada-preview2.webp" alt="" />
                              </picture>
                          </div>
                      </div>
                      <div class="details-column">
                          <div class="details-column-item">
                              <div class="details-item-svg">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                      height="48px" width="48px" version="1.1" id="Layer_1" viewBox="0 0 392.555 392.555"
                                      xml:space="preserve">
                                      <path style="fill:#194F82;"
                                          d="M389.526,311.898l-28.962-65.81V65.465c0-18.036-14.675-32.711-32.711-32.711H64.613  c-18.036,0-32.711,14.675-32.711,32.711v180.493L2.94,311.898c-9.891,21.657,6.335,47.903,31.289,47.903h324.073  C383.32,359.801,399.611,333.878,389.526,311.898z M53.752,65.465c0-6.012,4.848-10.925,10.925-10.925h263.176  c6.012,0,10.925,4.848,10.925,10.925v171.96H53.752V65.465z M358.237,338.015H34.229c-8.663,0.711-15.386-10.408-11.313-17.325  l27.022-61.414h292.525l27.022,61.414C373.429,328.189,366.447,338.597,358.237,338.015z" />
                                      <path style="fill:#FFFFFF;"
                                          d="M327.918,54.605H64.613c-6.012,0-10.925,4.848-10.925,10.925v171.96h284.962V65.53  C338.779,59.518,333.865,54.605,327.918,54.605z" />
                                      <path style="fill:#FFC10D;"
                                          d="M342.593,259.211H49.938l-27.022,61.414c-4.073,6.982,2.715,18.036,11.313,17.325h324.073  c8.21,0.517,15.127-9.826,11.313-17.325L342.593,259.211z" />
                                      <path style="fill:#56ACE0;"
                                          d="M75.538,76.391v48.226h50.295c6.012,0,10.925,4.848,10.925,10.925  c0,6.012-4.848,10.925-10.925,10.925H75.538v19.459h22.174c6.012,0,10.925,4.848,10.925,10.925c0,6.012-4.848,10.925-10.925,10.925  H75.538v49.713h241.39V76.52H75.538V76.391z" />
                                      <path style="fill:#194F82;"
                                          d="M229.203,287.72h-65.81c-6.012,0-10.925,4.848-10.925,10.925s4.848,10.925,10.925,10.925h65.81  c6.012,0,10.925-4.848,10.925-10.925C240.128,292.568,235.215,287.72,229.203,287.72z" />
                                  </svg>
                              </div>
                              <div class="details-item-description">
                                  <div class="details-item-description-title"><h5>Aprende a programar</h5></div>
                                  <div class="details-item-description-text">
                                      <p>Utilizarás las tecnologías con más salida laboral.</p>
                                  </div>
                              </div>
                          </div>
                          <div class="details-column-item">
                              <div class="details-item-svg">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                      height="48px" width="48px" version="1.1" id="Layer_1" viewBox="0 0 392.597 392.597"
                                      xml:space="preserve">
                                      <path style="fill:#56ACE0;"
                                          d="M334.642,223.935c0,0,14.352,1.422,14.352-10.925V54.497c0-6.012-4.848-10.925-10.925-10.925H54.594  c-6.012,0-10.925,4.848-10.925,10.925v158.578c0,6.012,4.848,10.925,10.925,10.925h117.01" />
                                      <g>
                                          <path style="fill:#194F82;"
                                              d="M322.165,80.614H70.432c-6.012,0-10.925-4.848-10.925-10.925c0-6.012,4.848-10.925,10.925-10.925   h251.733c6.012,0,10.925,4.848,10.925,10.925C333.091,75.701,328.113,80.614,322.165,80.614z" />
                                          <path style="fill:#194F82;"
                                              d="M322.165,127.483H70.432c-6.012,0-10.925-4.848-10.925-10.925c0-6.012,4.848-10.925,10.925-10.925   h251.733c6.012,0,10.925,4.848,10.925,10.925C333.091,122.634,328.113,127.483,322.165,127.483z" />
                                          <path style="fill:#194F82;"
                                              d="M149.301,180.558H70.432c-6.012,0-10.925-4.848-10.925-10.925c0-6.012,4.848-10.925,10.925-10.925   h78.869c6.012,0,10.925,4.848,10.925,10.925C160.226,175.709,155.313,180.558,149.301,180.558z" />
                                          <path style="fill:#194F82;"
                                              d="M359.79,0H32.808C14.707,0,0.032,14.675,0.032,32.711v202.15c0,18.036,14.675,32.711,32.711,32.711   h153.147v26.246c0,6.012,4.848,10.925,10.925,10.925h14.287v76.865c-0.323,7.628,9.051,14.61,17.648,8.598l24.436-19.071   l24.436,19.071c7.758,5.56,17.39,0.905,17.648-8.598v-76.929h14.158c6.012,0,10.925-4.848,10.925-10.925v-26.246h39.499   c18.036,0,32.711-14.675,32.711-32.711V32.711C392.565,14.675,377.891,0,359.79,0z M273.293,359.24l-13.511-10.602   c-3.943-3.103-9.503-3.103-13.446,0l-13.511,10.602v-46.933l12.541,12.541c5.172,4.655,10.796,4.008,15.451,0l12.541-12.541   L273.293,359.24L273.293,359.24z M301.672,253.156c-2.004,2.004-3.168,4.784-3.168,7.758v22.109H276.46   c-2.844,0-5.624,1.164-7.758,3.168l-15.58,15.58l-15.644-15.644c-2.004-2.004-4.784-3.168-7.758-3.168h-22.109v-22.109   c0-2.844-1.164-5.624-3.168-7.758l-15.58-15.58l15.58-15.58c2.004-2.004,3.168-4.784,3.168-7.758v-22.109h22.109   c2.844,0,5.624-1.164,7.758-3.168l15.58-15.58l15.58,15.58c2.004,2.004,4.784,3.168,7.758,3.168h22.109v22.109   c0,2.844,1.164,5.624,3.168,7.758l15.58,15.58L301.672,253.156z M370.78,234.796c0,6.012-4.848,10.925-10.925,10.925h-19.911   c0,0,9.051-7.434,0.517-15.968l-20.17-20.17v-28.509c0-6.012-4.849-10.925-10.925-10.925h-28.509l-20.105-20.105   c-4.267-4.267-11.119-4.267-15.451,0l-20.105,20.105h-28.509c-6.012,0-10.925,4.848-10.925,10.925v28.509l-20.17,20.17   c-8.339,8.339,0.517,15.968,0.517,15.968H32.808c-6.012,0-10.925-4.848-10.925-10.925V32.711c0-6.012,4.848-10.925,10.925-10.925   h327.111c6.012,0,10.925,4.848,10.925,10.925v202.085H370.78z" />
                                      </g>
                                      <path style="fill:#FFFFFF;"
                                          d="M245.365,324.849l-12.541-12.541v46.933l13.511-10.602c3.943-3.103,9.503-3.103,13.446,0  l13.511,10.602v-46.804l-12.477,12.477C256.291,328.857,250.537,329.503,245.365,324.849z" />
                                      <path style="fill:#FFC10D;"
                                          d="M301.672,253.156l15.58-15.58l-15.58-15.644c-2.004-2.004-3.168-4.784-3.168-7.758v-22.109H276.46  c-2.844,0-5.624-1.164-7.758-3.168l-15.58-15.58l-15.58,15.58c-2.004,2.004-4.784,3.168-7.758,3.168h-22.109v22.109  c0,2.844-1.164,5.624-3.168,7.758l-15.58,15.58l15.58,15.58c2.004,2.004,3.168,4.784,3.168,7.758v22.109h22.109  c2.844,0,5.624,1.164,7.758,3.168l15.58,15.58l15.58-15.58c2.004-2.004,4.784-3.168,7.758-3.168h22.109v-22.109  C298.505,257.939,299.604,255.16,301.672,253.156z" />
                                  </svg>
                              </div>
                              <div class="details-item-description">
                                  <div class="details-item-description-title"><h5>Cursos certificados</h5></div>
                                  <div class="details-item-description-text">
                                      <p>Obtén una titulación al finalizar cualquiera de nuestros cursos.</p>
                                  </div>
                              </div>
                          </div>
                          <div class="details-column-item">
                              <div class="details-item-svg">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                      height="48px" width="48px" version="1.1" id="Layer_1" viewBox="0 0 392.598 392.598"
                                      xml:space="preserve">
                                      <path style="fill:#194F82;"
                                          d="M245.689,307.006c4.267-4.267,4.267-11.119,0-15.451l-38.465-38.465v-44.994  c0-6.012-4.848-10.925-10.925-10.925c-6.077,0-10.925,4.848-10.925,10.925v44.994l-38.465,38.465  c-4.267,4.267-4.267,11.119,0,15.451c4.267,4.267,11.119,4.267,15.451,0l33.939-33.939l33.939,33.939  C235.604,311.337,240.84,311.079,245.689,307.006z" />
                                      <path style="fill:#FFC10D;"
                                          d="M196.299,56.954c9.632,0,17.519-7.887,17.519-17.519s-7.887-17.648-17.519-17.648  c-9.632,0-17.648,7.887-17.648,17.648C178.651,49.067,186.667,56.954,196.299,56.954z" />
                                      <path style="fill:#56ACE0;"
                                          d="M254.933,140.089c0-2.909-1.228-5.624-3.297-7.37c-15.515-12.735-35.297-19.782-55.467-19.782  c-20.234,0-39.952,7.046-55.467,19.782c-2.069,1.681-3.297,4.461-3.297,7.37v14.352h117.657v-14.352H254.933z" />
                                      <path style="fill:#FFFFFF;"
                                          d="M80.84,273.261c9.632,0,17.519-7.887,17.519-17.519c0-9.632-7.887-17.519-17.519-17.519  s-17.519,7.887-17.519,17.519C63.321,265.374,71.208,273.261,80.84,273.261z" />
                                      <g>
                                          <path style="fill:#FFC10D;"
                                              d="M139.475,356.396c0-2.909-1.228-5.624-3.297-7.37c-15.58-12.8-35.297-19.846-55.467-19.846   c-20.234,0-39.952,7.046-55.467,19.782c-2.069,1.681-3.297,4.461-3.297,7.37v14.352h117.657v-14.287H139.475z" />
                                          <path style="fill:#FFC10D;"
                                              d="M312.145,273.261c9.632,0,17.519-7.887,17.519-17.519c0-9.632-7.887-17.519-17.519-17.519   s-17.584,7.822-17.584,17.455C294.497,265.374,302.384,273.261,312.145,273.261z" />
                                      </g>
                                      <path style="fill:#56ACE0;"
                                          d="M370.78,356.396c0-2.844-1.228-5.624-3.297-7.37c-15.515-12.735-35.297-19.782-55.467-19.782  s-39.952,7.046-55.467,19.782c-2.069,1.681-3.297,4.461-3.297,7.37v14.352h117.657v-14.352H370.78z" />
                                      <g>
                                          <path style="fill:#194F82;"
                                              d="M196.299,78.739c21.721,0,39.434-17.713,39.434-39.434S218.02,0,196.299,0   s-39.434,17.713-39.434,39.434S174.578,78.739,196.299,78.739z M196.299,21.786c9.632,0,17.519,7.887,17.519,17.648   c0,9.632-7.887,17.519-17.519,17.519c-9.632,0-17.648-7.887-17.648-17.519C178.651,29.673,186.667,21.786,196.299,21.786z" />
                                          <path style="fill:#194F82;"
                                              d="M126.352,176.226h139.507c6.012,0,10.925-4.848,10.925-10.925v-25.277   c0-9.503-4.073-18.295-11.378-24.242c-19.459-15.903-44.024-24.76-69.301-24.76s-49.842,8.792-69.301,24.76   c-7.176,5.883-11.378,14.739-11.378,24.242v25.277C115.491,171.378,120.339,176.226,126.352,176.226z M137.277,140.089   c0-2.909,1.228-5.624,3.297-7.37c15.515-12.735,35.297-19.782,55.467-19.782c20.234,0,39.952,7.046,55.467,19.782   c2.069,1.681,3.297,4.461,3.297,7.37v14.352H137.277V140.089z" />
                                          <path style="fill:#194F82;"
                                              d="M80.84,295.046c21.721,0,39.434-17.713,39.434-39.434s-17.713-39.434-39.434-39.434   s-39.434,17.713-39.434,39.434C41.535,277.333,59.119,295.046,80.84,295.046z M80.84,238.093c9.632,0,17.519,7.887,17.519,17.519   c0,9.632-7.887,17.519-17.519,17.519s-17.519-7.887-17.519-17.519C63.321,245.98,71.208,238.093,80.84,238.093z" />
                                          <path style="fill:#194F82;"
                                              d="M150.012,332.089c-19.459-15.903-44.024-24.76-69.301-24.76s-49.842,8.857-69.301,24.76   c-7.305,5.883-11.378,14.804-11.378,24.307v25.277c0,6.012,4.848,10.925,10.925,10.925H150.4c6.012,0,10.925-4.848,10.925-10.925   v-25.277C161.325,346.893,157.188,337.972,150.012,332.089z M21.818,356.396c0-2.909,1.228-5.624,3.297-7.37   c15.515-12.735,35.297-19.782,55.467-19.782c20.234,0,39.952,7.046,55.467,19.782c2.069,1.681,3.297,4.461,3.297,7.37v14.352   H21.818V356.396z" />
                                          <path style="fill:#194F82;"
                                              d="M312.145,295.046c21.721,0,39.434-17.713,39.434-39.434s-17.713-39.434-39.434-39.434   s-39.434,17.713-39.434,39.434S290.424,295.046,312.145,295.046z M312.145,238.093c9.632,0,17.519,7.887,17.519,17.519   c0,9.632-7.887,17.519-17.519,17.519s-17.584-7.887-17.584-17.519C294.497,245.98,302.384,238.093,312.145,238.093z" />
                                          <path style="fill:#194F82;"
                                              d="M381.188,332.089c-19.459-15.903-44.024-24.76-69.301-24.76s-49.842,8.792-69.301,24.76   c-7.176,5.883-11.378,14.739-11.378,24.242v25.277c0,6.012,4.848,10.925,10.925,10.925H381.64c6.012,0,10.925-4.848,10.925-10.925   v-25.277C392.566,346.893,388.493,337.972,381.188,332.089z M253.123,356.396c0-2.844,1.228-5.624,3.297-7.37   c15.515-12.735,35.297-19.782,55.467-19.782c20.17,0,39.952,7.046,55.467,19.782c2.069,1.681,3.297,4.461,3.297,7.37v14.352   H253.123V356.396z" />
                                      </g>
                                  </svg>
                              </div>
                              <div class="details-item-description">
                                  <div class="details-item-description-title"><h5>Encuentra trabajo</h5></div>
                                  <div class="details-item-description-text">
                                      <p>Te ayudamos a encontrar trabajo en una de nuestras empresas afiliadas.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
        `;
      }
    connectedCallback() {
      // Método que se ejecuta cuando el componente se agrega al DOM
      this.render();
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
  
  customElements.define("details-component", DetailsComponent);