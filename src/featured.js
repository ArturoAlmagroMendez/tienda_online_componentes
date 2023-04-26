class Featured extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      // Método que genera el código HTML del componentea
      this.shadowRoot.innerHTML = `
        <style>
        .featured {
            align-items: center;
            height: 100vh;
            display: flex;
            background-color: rgb(22, 19, 19);
            flex-direction: column;
            height: 100vh;
            justify-content: center;
            width: 80%;
            padding:0 10%;
            z-index: 1001;
            position: relative;
            z-index: 0;
           
          }
          .featured .featured-items {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            gap:1.5rem;
          }
          .featured .featured-background-image {
            position: absolute;
              height: 100%;
              width: 100%;
              z-index: -1;
          }
          .featured .featured-background-image img{
              width: 100%;
              height: 100%;
          }
          
          .featured .featured-title h2 {
            color:#fff;
            font-size: 4.3rem;
            font-family: Anime;
            font-weight: 300;
            margin: 0;
            letter-spacing: 11px;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }
          .featured-title h2.fade-in-text {
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
            color: #fff;
          }
          
          .featured-subtitle p{
            font-size: 2rem;
            font-weight: 300;
            font-family: Anime;
            letter-spacing: 2px;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            color: #fff;
          }
          .featured-subtitle p.fade-in-text {
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
          }
          
          
          .featured-subtitle {
            margin-bottom: 3rem;
          }
          .featured .featured-content {
            display: flex;
            width: 100%;
            text-align: center;
            justify-content: space-evenly;
            gap: 4rem;
            color: #000;
          }
          .featured .featured-content .featured-item {
            align-items: center;
            display: flex;
            flex-direction: column;
            width: 33%;
            border: none;
            background-color: hsla(0, 0%, 100%, 0.58);
            border-radius: 10px;
            padding: 1rem 0;
            box-shadow: 0 0 62px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            gap: 2rem;
            transition: 0.3s ease-in-out;
          }
          .featured .featured-content .featured-item:hover {
            transform: scale(1.1);
          }
          
          .featured .featured-content .featured-item:nth-child(n + 2)::before {
            content: ">";
            font-size: 4em;
            position: absolute;
            padding: 2rem;
            padding-right: 29%;
            padding-top: 6rem;
          }
          .featured .featured-content .featured-item .featured-item-image {
            width: 50%;
            height: 50%;
          }
          .featured .featured-content .featured-item .featured-item-image svg {
            width: 12rem;
            height: 12rem;
          }
          .featured .featured-content .featured-item .featured-item-title h3{
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1.9rem;
          }
          .featured .featured-content .featured-item .featured-item-text p{
            font-size: 1.5rem;
            font-family: 'Poppins', sans-serif;
          }
          
        </style>
        <div id="featured" class="featured">
                <div class="featured-background-image">
                    <picture>
                        <img src="/img/rojonegro.webp" alt="">
                    </picture>
                </div>
                <div class="featured-items">
                    <div class="featured-title">
                        <h2>How it works</h2>
                    </div>
                    <div class="featured-subtitle">
                        <p>How to get the best fan art for you</p>
                    </div>
                    <div class="featured-content">
                        <div class="featured-item">
                            <div class="featured-item-image">
                                <svg viewBox="0 0 324 310"  version="1.0"  id="svg2">
                                    <defs id="defs4">
                                      <linearGradient id="linearGradient3204">
                                        <stop id="stop3206" style="stop-color:#ffc600;stop-opacity:1" offset="0"/>
                                        <stop id="stop3208" style="stop-color:#f09f00;stop-opacity:1" offset="1"/>
                                      </linearGradient>
                                      <linearGradient id="linearGradient3242">
                                        <stop id="stop3244" style="stop-color:#ff0101;stop-opacity:1" offset="0"/>
                                        <stop id="stop3246" style="stop-color:#e80000;stop-opacity:1" offset="1"/>
                                      </linearGradient>
                                      <linearGradient id="linearGradient3191">
                                        <stop id="stop3193" style="stop-color:#c7861c;stop-opacity:1" offset="0"/>
                                        <stop id="stop3195" style="stop-color:#c7861c;stop-opacity:0" offset="1"/>
                                      </linearGradient>
                                      <linearGradient id="linearGradient3167">
                                        <stop id="stop3169" style="stop-color:#ffc600;stop-opacity:1" offset="0"/>
                                        <stop id="stop3171" style="stop-color:#ffa901;stop-opacity:1" offset="1"/>
                                      </linearGradient>
                                      <linearGradient id="linearGradient3159">
                                        <stop id="stop3161" style="stop-color:#ffffff;stop-opacity:1" offset="0"/>
                                        <stop id="stop3163" style="stop-color:#ffffff;stop-opacity:0" offset="1"/>
                                      </linearGradient>
                                      <linearGradient x1="101.32093" y1="435.52069" x2="108.16026" y2="501.39981" id="linearGradient3165" xlink:href="#linearGradient3159" gradientUnits="userSpaceOnUse"/>
                                      <linearGradient x1="37.267757" y1="-64.953644" x2="344.52771" y2="553.46136" id="linearGradient3173" xlink:href="#linearGradient3167" gradientUnits="userSpaceOnUse"/>
                                      <linearGradient x1="54.920635" y1="-53.888538" x2="330.65759" y2="570.72418" id="linearGradient3175" xlink:href="#linearGradient3167" gradientUnits="userSpaceOnUse"/>
                                      <filter height="1.4287587" y="-0.2143794" width="1.6937463" x="-0.34687316" id="filter3189">
                                        <feGaussianBlur id="feGaussianBlur3191" stdDeviation="66.071078" inkscape:collect="always"/>
                                      </filter>
                                      <linearGradient x1="189.64871" y1="426.14062" x2="283.32553" y2="581.75488" id="linearGradient3225" xlink:href="#linearGradient3167" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.5697694,-4.9028682e-2,3.0301405e-2,0.3521368,69.148521,471.56306)"/>
                                      <radialGradient cx="197.14285" cy="243.79076" r="228.57143" fx="197.14285" fy="243.79076" id="radialGradient3185" xlink:href="#linearGradient3167" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1,0,0,1.618034,0,-150.67097)"/>
                                      <linearGradient x1="87.504135" y1="83.227425" x2="133.84604" y2="140.17188" id="linearGradient3203" xlink:href="#linearGradient3159" gradientUnits="userSpaceOnUse"/>
                                      <linearGradient x1="87.504135" y1="83.227425" x2="133.84604" y2="140.17188" id="linearGradient3207" xlink:href="#linearGradient3159" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.7307355,5.950821e-3,4.6320088e-2,-0.6121842,320.43925,697.22331)"/>
                                      <filter height="1.2443796" y="-0.12218978" width="1.6832653" x="-0.34163263" id="filter3219">
                                        <feGaussianBlur id="feGaussianBlur3221" stdDeviation="4.8437499" inkscape:collect="always"/>
                                      </filter>
                                      <radialGradient cx="166.42352" cy="179.63965" r="57.654758" fx="166.42352" fy="179.63965" id="radialGradient3248" xlink:href="#linearGradient3242" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.1003678,0.8316307,-0.8843028,1.0582892,165.01448,222.11628)"/>
                                      <filter height="1.2244117" y="-0.11220583" width="1.1502626" x="-0.075131319" id="filter3250">
                                        <feGaussianBlur id="feGaussianBlur3252" stdDeviation="3.050246" inkscape:collect="always"/>
                                      </filter>
                                      <radialGradient cx="197.14285" cy="243.79076" r="228.57143" fx="197.14285" fy="243.79076" id="radialGradient2431" xlink:href="#linearGradient3204" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.261783,0.5084394,-0.4984068,0.2566175,239.89833,11.846683)"/>
                                      <radialGradient cx="197.14285" cy="243.79076" r="228.57143" fx="197.14285" fy="243.79076" id="radialGradient3219" xlink:href="#linearGradient3204" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.261783,0.5084394,-0.4984068,0.2566175,239.89833,11.846683)"/>
                                      <filter id="filter3225">
                                        <feGaussianBlur id="feGaussianBlur3227" stdDeviation="2.8082812" inkscape:collect="always"/>
                                      </filter>
                                      <radialGradient cx="197.14285" cy="243.79076" r="228.57143" fx="197.14285" fy="243.79076" id="radialGradient3236" xlink:href="#linearGradient3167" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1,0,0,1.618034,0,-150.67097)"/>
                                      <radialGradient cx="197.14285" cy="243.79076" r="228.57143" fx="197.14285" fy="243.79076" id="radialGradient3238" xlink:href="#linearGradient3204" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.261783,0.5084394,-0.4984068,0.2566175,239.89833,11.846683)"/>
                                      <radialGradient cx="166.42352" cy="179.63965" r="57.654758" fx="166.42352" fy="179.63965" id="radialGradient3240" xlink:href="#linearGradient3242" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.1003678,0.8316307,-0.8843028,1.0582892,165.01448,222.11628)"/>
                                      <linearGradient x1="87.504135" y1="83.227425" x2="133.84604" y2="140.17188" id="linearGradient3243" xlink:href="#linearGradient3159" gradientUnits="userSpaceOnUse"/>
                                      <linearGradient x1="87.504135" y1="83.227425" x2="133.84604" y2="140.17188" id="linearGradient3245" xlink:href="#linearGradient3159" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.7307355,5.950821e-3,4.6320088e-2,-0.6121842,320.43925,697.22331)"/>
                                    </defs>
                                    <g transform="translate(-19.285715,-364.50504)" id="layer1">
                                      <g transform="translate(0,-8.0506042)" id="g3249">
                                        <path d="M 425.71428,243.79076 A 228.57143,369.83633 0 1 1 -31.428574,243.79076 A 228.57143,369.83633 0 1 1 425.71428,243.79076 z" transform="matrix(0.4671875,0,0,6.3204487e-2,102.18304,648.76461)" id="path3177" style="opacity:0.75;fill:#947a00;fill-opacity:1;stroke:none;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter3189)"/>
                                        <g transform="translate(5.0000031,0)" id="g3228">
                                          <path d="M 425.71428,243.79076 A 228.57143,369.83633 0 1 1 -31.428574,243.79076 A 228.57143,369.83633 0 1 1 425.71428,243.79076 z" transform="matrix(0.571875,0,0,0.3534381,76.544643,461.03356)" id="path2383" style="opacity:1;fill:url(#radialGradient3236);fill-opacity:1;stroke:#ec8000;stroke-width:4.44859409;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
                                          <path d="M 43.8125,178.96875 C 46.102809,246.78015 101.62768,301.03124 170,301.03125 C 238.37232,301.03125 293.89718,246.78015 296.1875,178.96875 C 210.2572,249.37546 126.08281,251.30181 43.8125,178.96875 z" transform="translate(19.285715,372.55564)" id="path2429" style="opacity:0.75;fill:url(#radialGradient3238);fill-opacity:1;stroke:none;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;filter:url(#filter3225)"/>
                                          <path d="M 146.53747,500.34345 C 145.03406,500.53849 143.43026,513.26714 142.32458,514.26628 C 141.21887,515.26542 127.82016,516.10366 127.53453,517.52527 C 127.24889,518.94686 139.42982,524.21058 140.07337,525.51165 C 140.71689,526.81271 137.25991,539.2214 138.58681,539.90496 C 139.91369,540.58851 149.05567,531.11002 150.5591,530.91498 C 152.0625,530.71994 163.32857,537.53331 164.43427,536.53417 C 165.53995,535.53503 159.03443,524.42834 159.32006,523.00673 C 159.60569,521.58514 170.0184,513.3783 169.37487,512.07724 C 168.73134,510.77617 155.55213,513.39505 154.22525,512.7115 C 152.89836,512.02794 148.04088,500.1484 146.53747,500.34345 z M 219.19978,492.13033 C 217.69636,492.32537 216.09257,505.05403 214.98688,506.05317 C 213.88118,507.05231 200.48247,507.89054 200.19683,509.31215 C 199.9112,510.73374 212.09213,515.99747 212.73567,517.29853 C 213.37919,518.59959 209.92223,531.00828 211.24912,531.69184 C 212.576,532.37539 221.71798,522.8969 223.2214,522.70186 C 224.72481,522.50682 235.99087,529.32019 237.09657,528.32105 C 238.20226,527.32191 231.69673,516.21522 231.98236,514.79361 C 232.26799,513.37202 242.64964,505.16869 242.00612,503.86763 C 241.36259,502.56657 228.21443,505.18194 226.88755,504.49838 C 225.56066,503.81483 220.7032,491.93528 219.19978,492.13033 z M 154.52237,570.98662 C 153.01895,571.18166 151.41181,583.88073 150.30613,584.87988 C 149.20042,585.87902 135.80505,586.74683 135.51942,588.16843 C 135.23378,589.59003 147.41137,594.82418 148.05492,596.12524 C 148.69844,597.42631 145.24146,609.835 146.56836,610.51856 C 147.89524,611.20211 157.04056,601.75319 158.54399,601.55815 C 160.0474,601.36311 171.31346,608.17648 172.41916,607.17734 C 173.52485,606.17819 167.01932,595.07151 167.30495,593.6499 C 167.59058,592.22831 178.0033,584.02147 177.35976,582.72041 C 176.71623,581.41934 163.53702,584.03821 162.21014,583.35466 C 160.88325,582.67111 156.02577,570.79158 154.52237,570.98662 z M 227.18467,562.7735 C 225.68125,562.96855 224.07412,575.66762 222.96843,576.66676 C 221.86273,577.6659 208.46736,578.53371 208.18172,579.95531 C 207.8961,581.37691 220.07368,586.61106 220.71722,587.91213 C 221.36074,589.21319 217.90378,601.62188 219.23067,602.30544 C 220.55755,602.98899 229.70288,593.54007 231.20629,593.34503 C 232.7097,593.14999 243.97577,599.96336 245.08146,598.96422 C 246.18715,597.96507 239.68163,586.85839 239.96725,585.43678 C 240.25288,584.01519 250.63454,575.81186 249.99101,574.5108 C 249.34748,573.20974 236.19932,575.8251 234.87244,575.14154 C 233.54556,574.458 228.6881,562.57846 227.18467,562.7735 z" id="path3193" style="fill:url(#radialGradient3240);fill-opacity:1;stroke:none;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
                                          <path d="M 150.875,54.65625 C 144.56949,54.714214 137.77348,55.721317 130.90625,57.78125 C 106.48943,65.105457 90.250708,82.969442 94.65625,97.65625 C 99.061788,112.34306 122.45818,118.29296 146.875,110.96875 C 171.29182,103.64454 187.53054,85.780558 183.125,71.09375 C 179.95852,60.537605 166.98908,54.50812 150.875,54.65625 z M 85.46875,102.8125 C 77.073095,103.21032 67.066748,110.82607 60.625,122.625 C 52.379562,137.72763 53.071964,154.00909 62.15625,158.96875 C 71.240537,163.92841 85.285815,155.69638 93.53125,140.59375 C 101.77669,125.49112 101.11554,109.20967 92.03125,104.25 C 90.044062,103.16507 87.819533,102.70111 85.46875,102.8125 z" transform="translate(19.285715,372.55564)" id="path2410" style="fill:url(#linearGradient3243);fill-opacity:1"/>
                                          <path d="M 212.7212,664.66141 C 217.33155,664.5884 222.34429,663.93144 227.45783,662.6295 C 245.63932,658.00044 258.33301,646.96777 255.79401,638.00295 C 253.25502,629.03812 236.43404,625.53491 218.25255,630.16397 C 200.07105,634.79305 187.37738,645.82573 189.91637,654.79055 C 191.74126,661.234 200.93921,664.84799 212.7212,664.66141 z M 262.74648,634.79169 C 268.89991,634.49819 276.56467,629.77641 281.81843,622.51496 C 288.54321,613.2203 288.7914,603.25716 282.38293,600.27499 C 275.97444,597.29283 265.32975,602.41592 258.60496,611.71058 C 251.88017,621.00525 251.60913,630.96856 258.01762,633.95074 C 259.41947,634.60309 261.02352,634.87387 262.74648,634.79169 z" id="path3205" style="fill:url(#linearGradient3245);fill-opacity:1;filter:url(#filter3250)"/>
                                          <path d="M 245.83333,191.31944 A 17.013889,47.569443 0 1 1 211.80555,191.31944 A 17.013889,47.569443 0 1 1 245.83333,191.31944 z" transform="matrix(1.8505326,-0.5056306,0.2635734,0.9646393,-210.82884,457.51894)" id="path3217" style="opacity:1;fill:#ffffff;fill-opacity:0.41880344;filter:url(#filter3219)"/>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                            </div>
                            <div class="featured-item-title">
                                <h3>Start</h3>
                            </div>
                            <div class="featured-item-text">
                                <p>Choose your favourite character or anime.</p> 
                            </div>
                
                
                    </div>
                    <div class="featured-item">
                        <div class="featured-item-image">
                            <!-- https://upload.wikimedia.org/wikipedia/bar/2/2c/Dragonball_%284-Sterne%29.svg -->
                     
                        </div>
                        <div class="featured-item-title">
                            <h3>Choose the style</h3>
                        </div>
                        <div class="featured-item-text">
                            <p>Give us the instructions to get your ideal design</p>
                        </div>
                    </div>
                    <div class="featured-item">
                        <div class="featured-item-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="371.48" height="371.48" viewBox="0 0 98.29 98.29"><path fill="#fff" d="M95.466 49.144c0 25.583-20.739 46.322-46.322 46.322-25.583 0-46.322-20.74-46.322-46.322C2.822 23.56 23.56 2.82 49.144 2.82c25.583 0 46.322 20.74 46.322 46.323"/><path fill="#7053ae" d="M2.822 49.144C2.822 23.56 23.56 2.82 49.144 2.82c25.583 0 46.322 20.74 46.322 46.323"/><path fill="#ebd43f" d="M2.822 49.144C2.822 23.56 23.56 2.82 49.144 2.82c25.583 0 46.322 20.74 46.322 46.323"/><path fill="#fff" d="M2.822 49.144h92.644H2.822"/><path fill="#201e1d" d="M95.466 51.965H2.822v-5.642h92.644v5.642"/><path fill="#ebd43f" d="M66.13 49.144c0 9.38-7.605 16.986-16.986 16.986s-16.986-7.606-16.986-16.986c0-9.381 7.605-16.986 16.986-16.986 9.38 0 16.986 7.605 16.986 16.986"/><path fill="#201e1d" d="M49.144 34.98c-7.81 0-14.164 6.353-14.164 14.164 0 7.81 6.354 14.164 14.164 14.164s14.164-6.354 14.164-14.164-6.354-14.165-14.164-14.165zm0 33.97c-10.922 0-19.807-8.885-19.807-19.806 0-10.922 8.885-19.808 19.807-19.808 10.921 0 19.807 8.886 19.807 19.808 0 10.921-8.886 19.807-19.807 19.807"/><path fill="#ebd43f" d="M56.365 49.144a7.22 7.22 0 1 1-14.442 0 7.22 7.22 0 0 1 14.442 0"/><path fill="#201e1d" d="M49.144 44.744a4.404 4.404 0 0 0-4.4 4.4c0 2.426 1.974 4.4 4.4 4.4s4.4-1.974 4.4-4.4-1.974-4.4-4.4-4.4zm0 14.442c-5.537 0-10.042-4.505-10.042-10.042 0-5.538 4.505-10.043 10.042-10.043s10.042 4.505 10.042 10.043c0 5.537-4.505 10.042-10.042 10.042"/><path fill="#fff" d="M21.31 33.08l-4.885-2.826a37.724 37.724 0 0 1 16.357-15.166l2.447 5.085a32.104 32.104 0 0 0-13.92 12.907"/><path fill="#201e1d" d="M49.144 5.643c-23.987 0-43.501 19.514-43.501 43.5 0 23.987 19.514 43.502 43.501 43.502 23.986 0 43.5-19.515 43.5-43.501 0-23.987-19.514-43.501-43.5-43.501zm0 92.644C22.046 98.287 0 76.242 0 49.144S22.046 0 49.144 0s49.144 22.046 49.144 49.144-22.046 49.143-49.144 49.143"/></svg>
                        </div>
                        <div class="featured-item-title">
                            <h3>Enjoy</h3>
                        </div>
                        <div class="featured-item-text">
                            <p>You will love the drawings that our artists are capable of creating</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
      `;
    }
    connectedCallback() {
      const featuredContainer = this.shadowRoot.querySelector('.featured .featured-item');
      const animatedHeader = this.shadowRoot.querySelector('.featured .featured-title h2');
      const animatedText = this.shadowRoot.querySelector('.featured-subtitle p');
      
      function isScrolledIntoView(el) {
          const rect = el.getBoundingClientRect();
          const elemTop = rect.top;
          const elemBottom = rect.bottom;
          const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
          return isVisible;
      }

      function checkHeaderAnimation() {
          if (isScrolledIntoView(featuredContainer)) {
              setTimeout(() => animatedHeader.classList.add('fade-in-text'), 1000);
              setTimeout(() => animatedText.classList.add('fade-in-text'), 2500); 
          } else {
              animatedHeader.classList.remove('fade-in-text');
              animatedText.classList.remove('fade-in-text');
          }
      }

    window.addEventListener('scroll', checkHeaderAnimation);
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
  
  customElements.define("featured-component", Featured);
  
