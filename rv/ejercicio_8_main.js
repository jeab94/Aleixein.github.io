AJEDREZ.setup = function(){
  AJEDREZ.iluminacion = new THREE.AmbientLight( 0xFFFFFF );

  AJEDREZ.escena = new THREE.Scene(); 
  AJEDREZ.escena.add(AJEDREZ.iluminacion);
  
  var cargadorColorBlanco = new THREE.TextureLoader();
  cargadorColorBlanco.load("marmol_blanco.jpg",AJEDREZ.colorBlanco);
  var cargadorColorNegro = new THREE.TextureLoader();
  cargadorColorNegro.load("marmol_negro.jpg",AJEDREZ.colorNegro);
  
  AJEDREZ.tablero();
  var cargadorBase = new THREE.TextureLoader();
  cargadorBase.load("madera.JPG",AJEDREZ.base);
  
  AJEDREZ.torreBlanca1 = new THREE.Mesh( new AJEDREZ.torreForma(), AJEDREZ.marmolBlanco);
  AJEDREZ.torreBlanca2 = new THREE.Mesh( new AJEDREZ.torreForma(), AJEDREZ.marmolBlanco);
  AJEDREZ.torreNegra1 = new THREE.Mesh( new AJEDREZ.torreForma(), AJEDREZ.marmolNegro);
  AJEDREZ.torreNegra2 = new THREE.Mesh( new AJEDREZ.torreForma(), AJEDREZ.marmolNegro);
  AJEDREZ.torreBlanca1.position.y = 5;
  AJEDREZ.torreBlanca2.position.x = 70;
  AJEDREZ.torreBlanca2.position.y = 5;
  AJEDREZ.torreBlanca2.position.z = 70;
  AJEDREZ.torreNegra1.position.y = 5;
  AJEDREZ.torreNegra1.position.z = 70;
  AJEDREZ.torreNegra2.position.x = 70;
  AJEDREZ.torreNegra2.position.y = 5;
  AJEDREZ.escena.add(AJEDREZ.torreBlanca1);
  AJEDREZ.escena.add(AJEDREZ.torreBlanca2);
  AJEDREZ.escena.add(AJEDREZ.torreNegra1);
  AJEDREZ.escena.add(AJEDREZ.torreNegra2);
  
  var campoVision = 55; //en grados
  var relacionAspecto = window.innerWidth/window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 600;

  AJEDREZ.camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);
  AJEDREZ.camara.position.x = 100;
  AJEDREZ.camara.position.y = 100;
  AJEDREZ.camara.position.z = 160;
  AJEDREZ.camara.lookAt(AJEDREZ.escena.position);
  
  var lienzo = document.getElementById("tablero-textura");
  AJEDREZ.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
  AJEDREZ.renderizador.setSize( window.innerWidth, window.innerHeight);
}

AJEDREZ.loop = function(){
  requestAnimationFrame(AJEDREZ.loop);
  
  if( (AJEDREZ.marcoMalla !== undefined) && (AJEDREZ.cuadros !== undefined) && (AJEDREZ.torreBlanca1 !== undefined) && (AJEDREZ.torreBlanca2 !== undefined) && (AJEDREZ.torreNegra1 !== undefined) && (AJEDREZ.torreNegra2 !== undefined) )
  
  AJEDREZ.renderizador.render( AJEDREZ.escena, AJEDREZ.camara );
}

AJEDREZ.setup();
AJEDREZ.loop();
