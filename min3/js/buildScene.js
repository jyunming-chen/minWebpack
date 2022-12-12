import { MeshText2D, textAlign } from '@kinyoklion/three-text2d/dist/three-text2d.js';
import * as THREE from 'three';

import {scene} from './main-3';

function buildScene() {


   let box = new THREE.Mesh (new THREE.BoxGeometry(50,20,10), new THREE.MeshNormalMaterial());
   scene.add (box);


   let text = new MeshText2D("RIGHT", { align: textAlign.right, font: '30px Arial',
                            fillStyle: '#000000', antialias: true });
   scene.add(text);
}

export { buildScene };

