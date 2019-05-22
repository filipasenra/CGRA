// JavaScript source code
/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTerrain extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
    }
    init(scene) {

        this.plane = new Plane(scene, 100);

        // Materials and textures initialization

        this.appearance = new CGFappearance(this.scene);
        this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.appearance.setShininess(120);
        this.appearance.loadTexture('images/terrain.jpg');

        this.texture = new CGFtexture(scene, "images/terrain.jpg");
        this.texture2 = new CGFtexture(scene, "images/heightmap.jpg");
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

        this.shader = new CGFshader(this.scene.gl, "shaders/texture3.vert", "shaders/texture3.frag");

        this.shader.setUniformsValues({ uSampler2: 2 });

        this.texture2.bind(2);

    }

    display() {

        this.appearance.apply();


		// activate selected shaderda
        this.scene.setActiveShader(this.shader);
        this.texture2.bind(2);
        
        
        this.scene.pushMatrix();
        this.scene.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 1);
        this.plane.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);

    }
}