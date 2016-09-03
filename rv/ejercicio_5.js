var base1Forma = new THREE.CylinderGeometry( 7, 7, 1, 20);
var base2Forma = new THREE.CylinderGeometry( 6, 6, 1, 20);
var base3Forma = new THREE.CylinderGeometry( 4, 6, 1, 20);
var base4Forma = new THREE.CylinderGeometry( 4, 4, 4, 20);
var base5Forma = new THREE.CylinderGeometry( 6, 4, 1, 20);
var cimaForma = new THREE.CylinderGeometry( 6, 6, 1, 20);
var diente1 = new THREE.PlaneGeometry( 1, 1);
var diente2 = new THREE.PlaneGeometry( 1, 1);
var diente3 = new THREE.PlaneGeometry( 1, 1);
var diente4 = new THREE.PlaneGeometry( 1, 1);
var diente1Forma = new THREE.ExtrudeGeometry( diente1, {amount: 0.5} );

base2Forma.translate(0, 1, 0);
base3Forma.translate(0, 2, 0);
base4Forma.translate(0, 4.5, 0);
base5Forma.translate(0, 7, 0);
cimaForma.translate(0, 8, 0);
diente1Forma.translate(0, 9, -2.5);

var base1Malla = new THREE.Mesh(base1Forma);
var base2Malla = new THREE.Mesh(base2Forma);
var base3Malla = new THREE.Mesh(base3Forma);
var base4Malla = new THREE.Mesh(base4Forma);
var base5Malla = new THREE.Mesh(base5Forma);
var cimaMalla = new THREE.Mesh(cimaForma);
var diente1Malla = new THREE.Mesh(diente1Forma);

var torreForma = new THREE.Geometry();

torreForma.merge(base1Malla.geometry, base1Malla.matrix);
torreForma.merge(base2Malla.geometry, base2Malla.matrix);
torreForma.merge(base3Malla.geometry, base3Malla.matrix);
torreForma.merge(base4Malla.geometry, base4Malla.matrix);
torreForma.merge(base5Malla.geometry, base5Malla.matrix);
torreForma.merge( cimaMalla.geometry, cimaMalla.matrix );
torreForma.merge(diente1Malla.geometry, diente1Malla.matrix);

var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh( torreForma, material );
torreMalla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add( torreMalla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 35;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement ); 
renderizador.render( escena, camara );
