import { BufferGeometry, Line, LineBasicMaterial, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three';

const render: WebGLRenderer = new WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
document.body.append(render.domElement);

const camera: PerspectiveCamera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene: Scene = new Scene();

const material: LineBasicMaterial = new LineBasicMaterial({ color: 0x0000FF });

const points: Array<Vector3> = [];
points.push(new Vector3(-10, 0, 0));
points.push(new Vector3(0, 10, 0));
points.push(new Vector3(10, 0, 0));

const geometry: BufferGeometry = new BufferGeometry().setFromPoints(points);

const line: Line = new Line(geometry, material);

scene.add(line);

render.render(scene, camera);
