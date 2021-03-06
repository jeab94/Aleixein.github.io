var mat1 = false;
var mat2 = false;
var mat3 = false;

base = function( textura) {
  var baseMadera = new THREE.MeshLambertMaterial( {map: textura} );
  mat3 = true;
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
  
  marcoMalla = new THREE.Mesh( marcoForma, baseMadera );   
}

torreForma = function(){ 
  
  THREE.Geometry.call(this);
  
  var base1Forma = new THREE.CylinderGeometry( 3.5, 3.5, 1, 20);
  var base2Forma = new THREE.CylinderGeometry( 3, 3, 1, 20);
  var base3Forma = new THREE.CylinderGeometry( 2, 3, 1, 20);
  var base4Forma = new THREE.CylinderGeometry( 2, 2, 4, 20);
  var base5Forma = new THREE.CylinderGeometry( 3, 2, 1, 20);
  var cimaForma = new THREE.CylinderGeometry( 3, 3, 1, 20);
  var diente1Forma = new THREE.BoxGeometry( 1.5, 1, 1);
  var diente2Forma = new THREE.BoxGeometry( 1.5, 1, 1);
  var diente3Forma = new THREE.BoxGeometry( 1, 1, 1.5);
  var diente4Forma = new THREE.BoxGeometry( 1, 1, 1.5);

  base2Forma.translate(0, 1, 0);
  base3Forma.translate(0, 2, 0);
  base4Forma.translate(0, 4.5, 0);
  base5Forma.translate(0, 7, 0);
  cimaForma.translate(0, 8, 0);
  diente1Forma.translate( 0, 9, 2.35);
  diente2Forma.translate(0, 9, -2.35);
  diente3Forma.translate( 2.35, 9, 0);
  diente4Forma.translate(-2.35, 9, 0);

  var base1Malla = new THREE.Mesh(base1Forma);
  var base2Malla = new THREE.Mesh(base2Forma);
  var base3Malla = new THREE.Mesh(base3Forma);
  var base4Malla = new THREE.Mesh(base4Forma);
  var base5Malla = new THREE.Mesh(base5Forma);
  var cimaMalla = new THREE.Mesh(cimaForma);
  var diente1Malla = new THREE.Mesh(diente1Forma);
  var diente2Malla = new THREE.Mesh(diente2Forma);
  var diente3Malla = new THREE.Mesh(diente3Forma);
  var diente4Malla = new THREE.Mesh(diente4Forma);


  this.merge(base1Malla.geometry, base1Malla.matrix);
  this.merge(base2Malla.geometry, base2Malla.matrix);
  this.merge(base3Malla.geometry, base3Malla.matrix);
  this.merge(base4Malla.geometry, base4Malla.matrix);
  this.merge(base5Malla.geometry, base5Malla.matrix);
  this.merge( cimaMalla.geometry, cimaMalla.matrix );
  this.merge(diente1Malla.geometry, diente1Malla.matrix);
  this.merge(diente2Malla.geometry, diente2Malla.matrix);
  this.merge(diente3Malla.geometry, diente3Malla.matrix);
  this.merge(diente4Malla.geometry, diente4Malla.matrix);
 
}

torreForma.prototype = new THREE.Geometry();
