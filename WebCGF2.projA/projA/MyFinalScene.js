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

        this.treeGroup1 = new MyTreeGroupPatch(scene);
        this.treeGroup2 = new MyTreeGroupPatch(scene);
        this.treeRow = new MyTreeRowPatch(scene);
        this.treeRow2 = new MyTreeRowPatch(scene);
        this.hill = new MyVoxelHill(scene, 4);
        this.hill2 = new MyVoxelHill(scene, 3);
        this.house = new MyHouse(scene);
        this.firePit = new MyFirePit(scene);

        this.Coord = [0, 0,
            0, 30,
            30, 0,
            30, 30];

        this.terreno = new MyQuad(scene, this.Coord);
    }

    display() {

        //TERRENO

        this.scene.pushMatrix();

        this.scene.rotate(-Math.PI / 2.0, 1, 0, 0);
        this.scene.scale(30, 30, 30);

        this.scene.difuseMaterial.setTexture(this.scene.relva);
        this.scene.difuseMaterial.apply();
        this.terreno.display();

        this.scene.popMatrix();

        //=====================================

        this.scene.difuseMaterial.setTexture(null);
        this.scene.difuseMaterial.apply();

        //TREES GROUP

        this.scene.pushMatrix();

        this.scene.translate(-10, 0, -5);

        this.treeGroup1.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(8, 0, 5);
        this.treeGroup2.display();

        this.scene.popMatrix();

        //=====================================
        //TRESS ROW

        this.scene.pushMatrix();

        this.scene.translate(6, 0, -10);
        this.treeRow.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.rotate(Math.PI / 2.0, 0, 1, 0);
        this.scene.translate(-7, 0, 6);
        this.treeRow2.display();

        this.scene.popMatrix();

        //======================================
        //HILLS

        this.scene.pushMatrix();

        this.scene.difuseMaterial.setTexture(this.scene.montanha);
        this.scene.difuseMaterial.apply();

        this.scene.translate(-10, 0, 10);
        this.hill.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(-10, 0, -10);
        this.hill2.display();

        this.scene.popMatrix();

        //=====================================

        this.scene.pushMatrix();

        this.scene.scale(2, 2, 2);
        this.house.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.firePit.display();

        this.scene.popMatrix();

        // ---- END Primitive drawing section
    }

    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
    }
}