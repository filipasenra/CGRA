/**
 * MyFinalScene
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyFinalScene extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
    }
    init(scene) {

        //Initializing objects of our final scene
        this.florest = new MyFlorest(scene);
        this.hill = new MyVoxelHill(scene, 6);
        this.hill2 = new MyVoxelHill(scene, 4);
        this.house = new MyHouse(scene);
        this.firePit = new MyFirePit(scene);
        this.pool = new MyPool(scene);

        this.Coord = [0, 0,
            0, 30,
            30, 0,
            30, 30];

        this.terreno = new MyQuad(scene, this.Coord);
    }

    display() {

        //FLOREST

        this.florest.display();

        //=====================================
        //TERRENO

        this.scene.pushMatrix();

        this.scene.rotate(-Math.PI / 2.0, 1, 0, 0);
        this.scene.scale(50, 50, 50);

        this.scene.difuseMaterial.setTexture(this.scene.grass);
        this.scene.difuseMaterial.apply();
        this.terreno.display();

        this.scene.popMatrix();

        //=====================================

        this.scene.difuseMaterial.setTexture(null);
        this.scene.difuseMaterial.apply();

        //======================================
        //HILL 1
        
        this.scene.pushMatrix();

        this.scene.difuseMaterial.setTexture(this.scene.montain);
        this.scene.difuseMaterial.apply();

        this.scene.translate(-15, 0, -15);
        this.scene.rotate(-Math.PI/5.0, 0, 1, 0);
        this.hill.display();

        this.scene.popMatrix();

        //HILL 2
        this.scene.pushMatrix();

        this.scene.translate(-13, 0, 10);
        this.hill2.display();

        this.scene.popMatrix();

        //=====================================
        //HOUSE
        this.scene.pushMatrix();

        this.scene.scale(2, 2, 2);
        this.house.display();

        this.scene.popMatrix();

        //=====================================
        //FIREPIT

        this.scene.pushMatrix();

        this.firePit.display();

        this.scene.popMatrix();


        //=====================================
        //POOL

        this.scene.pushMatrix();

        this.scene.translate(0, 0, 6);
        this.pool.display();

        this.scene.popMatrix();

    }

    updateBuffers(complexity) {
        // Reinitialize buffers
        this.initBuffers();
    }
}