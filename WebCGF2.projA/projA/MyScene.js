/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTexturesBool = true;

        //Initialize scene objects
        this.axis = new CGFaxis(this);

        //Objects connected to MyInterface
        this.cube = new MyCubeMap(this);
        this.finalScene = new MyFinalScene(this);

        this.quadMaterial = new CGFappearance(this);
        this.quadMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.quadMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.quadMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.quadMaterial.setShininess(10.0);
        this.quadMaterial.loadTexture('texturas/Fundo3.png');
        this.quadMaterial.setTextureWrap('MIRRORED_REPEAT', 'MIRRORED_REPEAT');

        this.specularMaterial = new CGFappearance(this);
        this.specularMaterial.setAmbient(1, 1, 1, 1);
        this.specularMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.specularMaterial.setSpecular(1, 1, 1, 1);
        this.specularMaterial.setShininess(20.0);
        this.specularMaterial.loadTexture('texturas/fire.jpg');
        this.specularMaterial.setTextureWrap('MIRRORED_REPEAT', 'MIRRORED_REPEAT');


        this.texture1 = new CGFtexture(this, 'texturas/mineTop.png');
        this.texture2 = new CGFtexture(this, 'texturas/Fundo3.png');
        this.tronco = new CGFtexture(this, 'texturas/tronco.jpg');
        this.folhas = new CGFtexture(this, 'texturas/folhas.jpg');
        this.telhado = new CGFtexture(this, 'texturas/telhado.jpg');
        this.postes = new CGFtexture(this, 'texturas/postes.jpeg');
        this.paredes = new CGFtexture(this, 'texturas/paredes.jpg');
        this.montanha = new CGFtexture(this, 'texturas/montanha1.jpg');
        this.fire = new CGFtexture(this, 'texturas/fire.jpg');
        this.dia = new CGFtexture(this, 'texturas/Dia.png');
        
    }
    initLights() {
        this.lights[0].setPosition(10, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();

        this.lights[1].setPosition(0.0, -1.0, 2.0, 1.0);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[1].setSpecular(1.0, 1.0, 0.0, 1.0);
        this.lights[1].enable();
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 40, 40), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        
        this.enableTextures(this.enableTexturesBool);

        
        this.finalScene.display();
        this.cube.display();
        //this.voxelHill.display();
        //this.house.display();
        // ---- END Primitive drawing section
    }
}