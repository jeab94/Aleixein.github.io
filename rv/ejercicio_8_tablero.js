var TEXTURA = new Object();

TEXTURA.blanco = function( textura ){
  var marmolBlanco = new THREE.MeshLambertMaterial( {map: textura} );  
}

TEXTURA.negro = function( textura ){
  var marmolNegro = new THREE.MeshLambertMaterial( {map: textura} );
}

TEXTURA.madera = function( textura) {
  var baseMadera = new THREE.MeshLambertMaterial( {map: textura} )
}

var TEXTURA.cargadorBlanco = new THREE.TextureLoader();
var TEXTURA.cargadorNegro = new THREE.TextureLoader();
TEXTURA.cargadorBlanco.load("marmol_blanco.jpg",TEXTURA.blanco);
TEXTURA.cargadorNegro.load("marmol_negro.jpg",TEXTURA.negro);
  
TEXTURA.tablero = function(){
  
  var TEXTURA.cuadros = new THREE.Object3D();

  for (var i = 0; i < 8; i++ ) {
    for ( var j = 0; j < 8; j++ ) {
      if ( (i+j) % 2 == 0){
        var item = new THREE.Mesh( cuboForma,marmolBlanco );
      }
      else{
        var item = new THREE.Mesh( cuboForma,marmolNegro );
      }
      item.position.x = i*10;
      item.position.z = j*10;
      TEXTURA.cuadros.add(item);
    }
  }
}

TEXTURA.base = function(){
  var cargadorBase = new THREE.TextureLoader();
  cargadorBase.load("madera.jpg",TEXTURA.madera);
  
  var izqForma = new THREE.BoxGeometry(10,10,100);
  var derForma = new THREE.BoxGeometry(10,10,100);
  var abajoForma = new THREE.BoxGeometry(80,10,10);
  var arribaForma = new THREE.BoxGeometry(80,10,10);
  izqForma.translate(-10,0,35);
  derForma.translate(80,0,35);
  abajoForma.translate(35,0,80);
  arribaForma.translate(35,0,-10);
  
  var izqMalla = new THREE.Mesh(izqForma);
  var derMalla = new THREE.Mesh(derForma);
  var abajoMalla = new THREE.Mesh(abajoForma);
  var arribaMalla = new THREE.Mesh(arribaForma);
  
  var marcoForma = new THREE.Geometry();
  
  marcoForma.merge( izqMalla.geometry, izqMalla.matrix );
  marcoForma.merge( derMalla.geometry, derMalla.matrix );
  marcoForma.merge( abajoMalla.geometry, abajoMalla.matrix );
  marcoForma.merge( arribaMalla.geometry, arribaMalla.matrix );
  
  var TEXTURA.marcoMalla = new THREE.Mesh( marcoForma, baseMadera );
}