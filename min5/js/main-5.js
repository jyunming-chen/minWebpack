import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import $ from 'jquery';

var scene, renderer, camera;
var mesh, angle = 0,
  turn = false;

init();
animate();

$("#toggle").click(function() {
  turn = !turn;
});

function init() {
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;
  
  let controls = new OrbitControls(camera, renderer.domElement);

  mesh = new THREE.Mesh (new THREE.BoxGeometry(100, 20, 20), 
                  new THREE.MeshNormalMaterial());

  scene.add(mesh);

  var gridXZ = new THREE.GridHelper(200, 20, 'red', 'white');
  scene.add(gridXZ);

}


function animate() {
  if (turn)
    angle += 0.01;
  mesh.rotation.y = angle;

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

