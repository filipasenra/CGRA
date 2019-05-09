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
        this.enableLights = 0;
        this.scaleFactor = 1.0;

        //Objects connected to MyInterface
        this.cube = new MyCubeMap(this);
        this.finalScene = new MyFinalScene(this);

        //Difuse Material
        this.difuseMaterial = new CGFappearance(this);
        this.difuseMaterial.setAmbient(0.3, 0.3, 0.3, 1);
        this.difuseMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.difuseMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.difuseMaterial.setShininess(10.0);
        this.difuseMaterial.loadTexture('texturas/Fundo3.png');
        this.difuseMaterial.setTextureWrap('MIRRORED_REPEAT', 'MIRRORED_REPEAT');

        //Specular Material
        this.fireMaterial = new CGFappearance(this);
        this.fireMaterial.setAmbient(0.9, 0.9, 0.9, 1);
        this.fireMaterial.setDiffuse(0.1, 0.1, 0.1, 1);
        this.fireMaterial.setSpecular(1, 1, 1, 1);
        this.fireMaterial.setShininess(80.0);
        this.fireMaterial.loadTexture('texturas/fire.jpg');
        this.fireMaterial.setTextureWrap('MIRRORED_REPEAT', 'MIRRORED_REPEAT');

        //Specular Material
        this.specularMaterial = new CGFappearance(this);
        this.specularMaterial.setAmbient(0.6, 0.6, 0.6, 1);
        this.specularMaterial.setDiffuse(0.1, 0.1, 0.1, 1);
        this.specularMaterial.setSpecular(1, 1, 1, 1);
        this.specularMaterial.setShininess(10.0);
        this.specularMaterial.loadTexture('texturas/paredes.jpg');
        this.specularMaterial.setTextureWrap('MIRRORED_REPEAT', 'MIRRORED_REPEAT');

        //Objects initialization
        this.grass = new CGFtexture(this, 'texturas/mineTop.png');
        this.night = new CGFtexture(this, 'texturas/Fundo3.png');
        this.wood = new CGFtexture(this, 'texturas/tronco.jpg');
        this.leaves = new CGFtexture(this, 'texturas/folhas.jpg');
        this.roof = new CGFtexture(this, 'texturas/telhado.jpg');
        this.pillars = new CGFtexture(this, 'texturas/postes.jpeg');
        this.walls = new CGFtexture(this, 'texturas/paredes.jpg');
        this.montain = new CGFtexture(this, 'texturas/montanha1.jpg');
        this.fire = new CGFtexture(this, 'texturas/fire.jpg');
        this.day = new CGFtexture(this, 'texturas/Dia.png');
        this.water = new CGFtexture(this, 'texturas/agua.jpeg');

        
        // Labels and ID's for object selection on MyInterface
        this.objectIDs = { 'Day': 0 , 'Night': 1};
    }
    initLights() {

        //DAY

        this.lights[0].setPosition(10, 20, 10, 1);
        this.lights[0].setAmbient(240 / 255.0, 230 / 255.0, 158 / 255.0, 1.0);
        this.lights[0].setDiffuse(240 / 255.0, 230 / 255.0, 158 / 255.0, 1.0);
        this.lights[0].setSpecular(255 / 255.0, 240 / 255.0, 158 / 255.0, 1.0);
        this.lights[0].setConstantAttenuation(0.4);
        this.lights[0].update();

        //MOON

        this.lights[1].setPosition(10, 10, 5, 1);
        this.lights[1].setAmbient(50 / 255.0, 65 / 255.0, 65 / 255.0, 1.0);
        this.lights[1].setDiffuse(50 / 255.0, 50 / 255.0, 50 / 255.0, 1.0);
        this.lights[1].setSpecular(50 / 255.0, 65 / 255.0, 65 / 255.0, 1.0);
        this.lights[1].setConstantAttenuation(0.4);
        this.lights[1].update();

        //FIREPIT

        this.lights[2].setPosition(4, 4, 0, 1);
        this.lights[2].setAmbient(255 / 255.0, 225 / 255.0, 0, 1.0);
        this.lights[2].setDiffuse(255 / 255.0, 225 / 255.0, 0, 1.0);
        this.lights[2].setSpecular(255 / 255.0, 225 / 255.0, 0, 1.0);
        this.lights[2].setConstantAttenuation(3);
        this.lights[2].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(20, 30, 50), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        //Apply default appearance
        this.setDefaultAppearance();

        this.enableTextures(this.enableTexturesBool);

        //Enabling correct ligths
        if (this.enableLights==0) {
            this.lights[0].enable();
            this.lights[0].update();

            this.lights[1].disable();
            this.lights[1].update();

            this.lights[2].disable();
            this.lights[2].update();
        } else{
            this.lights[0].disable();
            this.lights[0].update();

            this.lights[1].enable();
            this.lights[1].update();

            this.lights[2].enable();
            this.lights[2].update();
        }

        //Scale section
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        
        // ---- BEGIN Primitive drawing section

        //Display Scene
        this.finalScene.display();
        this.cube.display();
        
        // ---- END Primitive drawing section
    }
}