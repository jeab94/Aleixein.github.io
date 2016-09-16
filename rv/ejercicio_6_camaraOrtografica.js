var camara = new THREE.OrthographicCamera();

camara.left = window.innerWidth/-12;
camara.right = window.innerWidth/12;
camara.top = window.innerHeight/16;
camara.bottom = window.innerHeight/-16;
camara.near = 0.1;
camara.far = 200;
camara.updateProjectionMatrix();

camara.position.z = 120;
camara.position.y = 35;

var escena = new THREE.Scene();

var aristas = new THREE.EdgesHelper( marcoMalla, 0x474a4a );
aristas.material.linewidth = 0.3;

var aristas1 = new THREE.EdgesHelper( torres, 0x474a4a);
aristas1.material.linewidth = 0.3;

camara.lookAt(escena.position);
escena.add(marcoMalla);
escena.add(cuadros);
escena.add(torres);
escena.add( aristas );
escena.add( aristas1 );
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
