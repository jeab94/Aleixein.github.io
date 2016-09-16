var camara = new THREE.OrthographicCamera();

camara.left = window.innerWidth/-2;
camara.right = window.innerWidth/2;
camara.top = window.innerHeight/2;
camara.bottom = window.innerHeight/-2;
camara.near = 0.1;
camara.far = 300;
camara.updateProjectionMatrix();

//camara.position.x = 35;
camara.position.z = 160;
//camara.position.y = 30;

var escena = new THREE.Scene();
escena.add(marcoMalla);
escena.add(cuadros);
escena.add(torres);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
