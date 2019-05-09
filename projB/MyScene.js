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
        this.initTextures();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.cubeMap = new MyCubeMap(this);
        this.house = new MyHouse(this);
        this.bird = new MyBird(this);

        //Objects connected to MyInterface
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initTextures(){
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

        //Objects initialization
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
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    update(t){

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
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();

        this.pushMatrix();
        this.scale(60, 60, 60);
        this.cubeMap.display();
        this.popMatrix();

        this.pushMatrix();

        this.translate(-7, 0, -2);
        this.scale(3, 3, 3);
        this.house.display();

        this.popMatrix();

        this.translate(0, 3, 0);
        this.bird.display();
        // ---- END Primitive drawing section
    }
}