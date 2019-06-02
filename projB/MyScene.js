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
        this.terrain = new MyTerrain(this);
        this.nest = new MyNest(this);
        this.active = 0;

        this.branchs = [];
        this.treePosX =[];
        this.treePosY =[];

        for(var i=20; i>0 ; i--)
       { 
          // console.log("---------------------")
        this.treePosY.push(Math.floor((Math.random() * 16) + 1));   
        //console.log(this.treePosY[i]);
        this.treePosX.push(Math.floor((Math.random() * 16) + 1));
       // console.log(this.treePosX[i]);
       }
        //Objects connected to MyInterface

        this.branchs.push(new MyTreeBranch(this));

        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 25.0;
        this.iterations = 3;
        this.scaleFactor = 0.5;
        this.lSystem = new MyLightning(this);
        this.lPlant = new MyLPlant(this);

        /* Remember we need to escape de '\'*/
        this.doGenerate = function () {
            this.lSystem.generate(
                this.axiom,
                {
                    "F": [this.ruleF],
                    "X": [this.ruleX, "F[-X][X]+X", "F[+X]-X",
                        "F[/X][X]F[\\\\X]+X", "F[\\X][X]/X", "F[/X]\\X",
                        "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X"]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerate();

         /* Remember we need to escape de '\'*/
         this.doGenerate = function () {
            this.lPlant.generate(
                this.axiom,
                {
                    "F": [this.ruleF],
                    "X": [this.ruleX, "F[-X][X]+X", "F[+X]-X",
                        "F[/X][X]F[\\\\X]+X", "F[\\X][X]/X", "F[/X]\\X",
                        "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X"]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        this.doGenerate();

        // shader code panels references
        this.shadersDiv = document.getElementById("shaders");
        this.vShaderDiv = document.getElementById("vshader");
        this.fShaderDiv = document.getElementById("fshader");


        // set the scene update period 
        // (to invoke the update() method every 50ms or as close as possible to that )
        this.setUpdatePeriod(50);
        //this.lightning.startAnimation(1);
         
        this.branchMaterial = new CGFappearance(this);
        this.branchMaterial.setAmbient(0.3, 0.3, 0.3, 1);
        this.branchMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.branchMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.branchMaterial.setShininess(10.0);
        this.branchMaterial.loadTexture('texturas/tronco.jpg');
        this.branchMaterial.setTextureWrap('MIRRORED_REPEAT', 'MIRRORED_REPEAT');

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initTextures() {
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
        this.penas = new CGFtexture(this, 'texturas/penas.jpg')
        this.penasPretas = new CGFtexture(this,'texturas/black_feathers.jpg')
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
    update(t) {
        this.checkKeys();

        this.bird.updatePosition(t);

        for (var i = 0; i < this.branchs.length; i++) {

            if (this.bird.checkCollision(this.branchs[i])) {
                this.bird.addBranch(this.branchs[i]);
                this.branchs.splice(i, i + 1);
                i--;
                break;
            }
        }

        if (this.bird.hasBranch()) {
            if (this.nest.checkCollision(this.bird.branch) == true) {
                this.nest.addBranch(this.bird.removeBranch());
            }
        }

        if(this.active == 1){
            this.lSystem.startAnimation(t);
            this.active = 0;
        }

        this.lSystem.update(t);

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

        this.terrain.display();

        this.pushMatrix();
        this.scale(60, 60, 60);
        this.cubeMap.display();
        this.popMatrix();

        this.pushMatrix();

        this.translate(-7, 0, -2);
        this.scale(3, 3, 3);
        this.house.display();

        this.popMatrix();

        this.pushMatrix();
        this.bird.display();

        this.popMatrix();

        this.pushMatrix();
        this.nest.display();
        this.popMatrix();

        for (var i = 0; i < this.branchs.length; i++) {
            this.branchs[i].display();
        }

        this.pushMatrix();

        for (var i=8; i>0 ;i--)
        {  
            this.translate(-this.treePosY[i+1],0,-this.treePosX[i+1]);
            this.translate(this.treePosY[i],0,this.treePosX[i]);
            
        
            this.lPlant.display();
        }

        this.popMatrix();


        this.pushMatrix();

        this.translate(13,20,3);
        this.rotate(Math.PI,0,0,1);
        this.lSystem.display();

        this.popMatrix();

        // ---- END Primitive drawing section
    }

    checkKeys() {

        // Check for key codes e.g. in ​https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            this.bird.accelerate(0.2);
        }

        if (this.gui.isKeyPressed("KeyS")) {
            this.bird.accelerate(0);
        }

        if (this.gui.isKeyPressed("KeyR")) {
            this.bird.reset();
        }

        if (this.gui.isKeyPressed("KeyA")) {
            this.bird.turn(10);
        }

        if (this.gui.isKeyPressed("KeyD")) {
            this.bird.turn(-30);
        }

        if (this.gui.isKeyPressed("KeyP")) {
            this.bird.startDescend();
        }

        if (this.gui.isKeyPressed("KeyL")) {
            this.active = 1;
        }
    }
}