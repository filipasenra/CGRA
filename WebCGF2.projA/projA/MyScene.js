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
        this.specularMaterial = new CGFappearance(this);
        this.specularMaterial.setAmbient(0.9, 0.9, 0.9, 1);
        this.specularMaterial.setDiffuse(0.1, 0.1, 0.1, 1);
        this.specularMaterial.setSpecular(1, 1, 1, 1);
        this.specularMaterial.setShininess(10.0);
        this.specularMaterial.loadTexture('texturas/fire.jpg');
        this.specularMaterial.setTextureWrap('MIRRORED_REPEAT', 'MIRRORED_REPEAT');

        this.relva = new CGFtexture(this, 'texturas/mineTop.png');
        this.noite = new CGFtexture(this, 'texturas/Fundo3.png');
        this.tronco = new CGFtexture(this, 'texturas/tronco.jpg');
        this.folhas = new CGFtexture(this, 'texturas/folhas.jpg');
        this.telhado = new CGFtexture(this, 'texturas/telhado.jpg');
        this.postes = new CGFtexture(this, 'texturas/postes.jpeg');
        this.paredes = new CGFtexture(this, 'texturas/paredes.jpg');
        this.montanha = new CGFtexture(this, 'texturas/montanha1.jpg');
        this.fire = new CGFtexture(this, 'texturas/fire.jpg');
        this.dia = new CGFtexture(this, 'texturas/Dia.png');

        this.selectedDay = 0;
        // Labels and ID's for object selection on MyInterface
        this.objectIDs = { 'Day': 0 , 'Night': 1};
    }
    initLights() {
        this.lights[0].setPosition(10, 20, 10, 1);
        this.lights[0].setAmbient(255 / 255.0, 240 / 255.0, 158 / 255.0, 1.0);
        this.lights[0].setDiffuse(255 / 255.0, 240 / 255.0, 158 / 255.0, 1.0);
        this.lights[0].setSpecular(255 / 255.0, 240 / 255.0, 158 / 255.0, 1.0);
        this.lights[0].setConstantAttenuation(0.4);
        this.lights[0].update();

        this.lights[1].setPosition(10, 10, 5, 1);
        this.lights[1].setAmbient(80 / 255.0, 80 / 255.0, 80 / 255.0, 1.0);
        this.lights[1].setDiffuse(80 / 255.0, 80 / 255.0, 80 / 255.0, 1.0);
        this.lights[1].setSpecular(80 / 255.0, 80 / 255.0, 80 / 255.0, 1.0);
        this.lights[1].setConstantAttenuation(0.4);
        this.lights[1].update();

        this.lights[2].setPosition(4, 4, 0, 1);
        this.lights[2].setAmbient(255 / 255.0, 225 / 255.0, 0, 1.0);
        this.lights[2].setDiffuse(255 / 255.0, 225 / 255.0, 0, 1.0);
        this.lights[2].setSpecular(255 / 255.0, 225 / 255.0, 0, 1.0);
        this.lights[2].setConstantAttenuation(3);
        this.lights[2].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 20, 40), vec3.fromValues(0, 0, 0));
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

        // ---- BEGIN Primitive drawing section

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

        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.finalScene.display();
        this.cube.display();
        
        // ---- END Primitive drawing section
    }
}