/**
 * MyFlorest
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyFlorest extends CGFobject {

    constructor(scene) {

        super(scene);
        this.init(scene);
        
    }
    init(scene) {        
        this.treeGroup = new MyTreeGroupPatch(scene);
        this.treeRow = new MyTreeRowPatch(scene);
    }

    display() {

        //TREES GROUP 1

        this.scene.pushMatrix();

        this.scene.translate(-12, 0, -7);
        this.scene.rotate(Math.PI/4.2, 0, 1, 0);
        this.treeGroup.display();

        this.scene.popMatrix();

        //TREE GROUP 2
        this.scene.pushMatrix();

        this.scene.translate(11, 0, 13);
        this.scene.rotate(Math.PI/2.3, 0, 1, 0);
        this.treeGroup.display();

        this.scene.popMatrix();

        //TREES GROUP 3

        this.scene.pushMatrix();

        this.scene.translate(-14, 0, 1);
        this.scene.rotate(Math.PI/4.2, 0, 1, 0);
        
        this.treeGroup.display();

        this.scene.popMatrix();

        //=====================================
        //TREE ROW 1

        this.scene.pushMatrix();

        this.scene.translate(6, 0, -10);
        this.scene.rotate(Math.PI/7.0, 0, 1, 0);
        
        this.treeRow.display();

        this.scene.popMatrix();

        //TREE ROW 2
        this.scene.pushMatrix();

        this.scene.rotate(Math.PI / 2.3, 0, 1, 0);
        this.scene.translate(-7, 0, 10);

        this.treeRow.display();

        this.scene.popMatrix();

        //TREE ROW 1

        this.scene.pushMatrix();

        this.scene.translate(9, 0, -15);
        this.scene.rotate(Math.PI/7.0, 0, 1, 0);
        
        this.treeRow.display();

        this.scene.popMatrix();

        //TREE ROW 1

        this.scene.pushMatrix();

        this.scene.translate(6, 0, -18);
        this.scene.rotate(Math.PI/7.0, 0, 1, 0);
        
        this.treeRow.display();

        this.scene.popMatrix();

    }
}