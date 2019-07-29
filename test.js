var camera, scene, renderer;
var geometry, material, cube;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 5;

	scene = new THREE.Scene();

  cube = [];
  for(var x = 0; x < 3; x ++)
  {
    for(var y = 0; y < 3; y ++)
    {
      for(var z = 0; z < 3; z++)
      {
        if(!cube[x]) cube[x] = [];
        if(!cube[x][y]) cube[x][y] = [];

        cube[x][y][z] = new THREE.Mesh( geometry, material );
        scene.add(cube[x][y][z]);
        cube[x][y][z].position.set(x, y, z)
      }
    }
  }
	geometry = new THREE.BoxGeometry( 1, 1, 1 );
	material = new THREE.MeshNormalMaterial();

  //mesh = new THREE.Mesh( geometry, material );
	//scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
}

function animate() {

	requestAnimationFrame( animate );

	//mesh.rotation.x += 0.01;
	//mesh.rotation.y += 0.02;

	renderer.render( scene, camera );

}

document.onkeydown = function (e) {
    e = e || window.event;
    if(e.key == "a") mesh.rotation.y += 0.1;
    if(e.key == "d") mesh.rotation.y -= 0.1;
    if(e.key == "w") mesh.rotation.x += 0.2;
    if(e.key == "s") mesh.rotation.x -= 0.2;
};
