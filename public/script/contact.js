
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			
			var camera, scene, renderer;
			var geometry, material, mesh;
			

			function setup() {

				var W = window.innerWidth, H = window.innerHeight;
renderer = new THREE.WebGLRenderer();

				renderer.setSize( W, H );
				document.body.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 100, W/H, 1, 10000 );
				camera.position.z = 200;
			    camera.position.x = 50;
				camera.position.y = 200;

				scene = new THREE.Scene();
				
	geometry = new THREE.Geometry();
for ( i = 0; i < 5000; i ++ ) {
var vertex = new THREE.Vector3();
vertex.x = 3000 * Math.random() - 500;
vertex.y = 3000 * Math.random() - 500;
vertex.z = 3000 * Math.random() - 500;
geometry.vertices.push( vertex );
}
material = new THREE.ParticleBasicMaterial( { size: 9, sizeAttenuation: false, transparent: true } );
material.color.setHex( 0x000000);
particles = new THREE.ParticleSystem( geometry, material );
particles.sortParticles = false;
scene.add( particles );
					
					
wgeometry = new THREE.PlaneGeometry( 1000, 1000, 100, 100 );
wmaterial = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, wireframeLinewidth:49 } );
wireplane = new THREE.Mesh( wgeometry, wmaterial );
wireplane.scale.set( 1, 1, 1 );
wireplane.rotation.x = - Math.PI / 2;
scene.add( wireplane );

renderer.shadowMapEnabled = true;

hemisphereLight = new THREE.HemisphereLight(0xeaa4a4, 0x000000, 0.2);
scene.add( hemisphereLight );

directionalLight = new THREE.DirectionalLight(0xd827bc, 0.62);
directionalLight.position.set( 0, 1, 0 );
directionalLight.castShadow = true;
scene.add( directionalLight );

spotLight1 = new THREE.SpotLight( 0x914dc6, 0.77 );
spotLight1.position.set( 1000, 124.79, 433.56 );
spotLight1.castShadow = true;
spotLight1.shadowDarkness = 1;
scene.add( spotLight1 );
				
map = THREE.ImageUtils.loadTexture('../texturez/proxy.php?url=http://25.media.tumblr.com/6cbe27874b15b895f96d7a7021685437/tumblr_mqoikkYyHY1qanfefo1_500.jpg');
geometry = new THREE.PlaneGeometry(200, 200, 4, 4);
material = new THREE.MeshPhongMaterial({shading: THREE.FlatShading, color: 0xff00b7, ambient: 0x000000, emissive: 0xc45050, specular: 0x000000, shininess: 2.41, map: map});
mesh = new THREE.Mesh(geometry, material);
map.wrapS = map.wrapT = THREE.RepeatWrapping;
map.repeat.set( 1, 1 );
mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.00;
mesh.position.y = 200.71;
mesh.rotation.x = 2.47;
mesh.rotation.y = 8.62;
mesh.rotation.z = 3.71;
mesh.castShadow = true;
scene.add(mesh);


geometry = new THREE.CircleGeometry(100.46, 144, 256, 832.5220532012952);
material = new THREE.MeshBasicMaterial({shading: THREE.FlatShading, color: 0xffffff, wireframe: true, wireframeLinewidth: 1});
mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 260.14;
mesh.rotation.y = 0.71;
mesh.castShadow = true;
scene.add(mesh);

renderer.shadowMapEnabled = true;
					
					

			}

			function draw() {

				requestAnimationFrame( draw );
								mesh.rotation.z = Date.now() * 1000.;
								particles.rotation.z = Date.now() * 0.0002;
								particles.rotation.y = Date.now() * 0.0002;
		
				


				renderer.render( scene, camera );

			}

			setup();
			draw();
