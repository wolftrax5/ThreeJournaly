import * as THREE from 'three'

// SCENE
const scene = new THREE.Scene()
/** CAMERA */
// The Aspect Ratio
const ASR :number=  window.innerWidth / window.innerHeight;
// the Field of View
const FOV:number = 75

const camera = new THREE.PerspectiveCamera(
    FOV,
    ASR,
    0.1,
    1000
)
camera.position.z = 4
/** ******* */
/** Render */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
/** ******* */
/** Object */
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})
// a mesh needs a shader and a material
const cube = new THREE.Mesh(geometry, material)
/** ******* */

scene.add(cube)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = ASR
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

let time =  Date.now()

function animate() {
    //Time
    const currentTime = Date.now();
    const deltaTime = currentTime - time
    time = currentTime
    //Update objects
    cube.rotation.x += 0.001 * deltaTime
    cube.rotation.y += 0.001 * deltaTime
    // Render
    render()

    requestAnimationFrame(animate)
}

function render() {
    renderer.render(scene, camera)
}

animate()