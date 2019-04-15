/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTreeGroupPatch extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
    }
    init(scene) {

        this.tree1 = new MyTree(scene, 2, 0.5, 1.5, 1);
        this.tree2 = new MyTree(scene, 1.8, 0.5, 1.3, 0.9);
        this.tree3 = new MyTree(scene, 2.1, 0.5, 1.4, 1.2);
        this.tree4 = new MyTree(scene, 1.9, 0.3, 1.2, 0.9);
        this.tree5 = new MyTree(scene, 2, 0.5, 1.5, 1);
        this.tree6 = new MyTree(scene, 1.8, 0.5, 1.3, 1.1);
        this.tree7 = new MyTree(scene, 2.1, 0.5, 1.4, 1.2);
        this.tree8 = new MyTree(scene, 1.9, 0.4, 1.2, 0.9);
        this.tree9 = new MyTree(scene, 1.7, 0.3, 1.1, 0.8);
    }

    display() {


        //===================================
        //TREE 1
        this.scene.pushMatrix();

        this.scene.translate(1, 0, 1);
        this.tree1.display();

        this.scene.popMatrix();

        //TREE 2
        this.scene.pushMatrix();
        
        this.scene.translate(3.5, 0, 1.1);
        this.tree2.display();

        this.scene.popMatrix();

        //TREE 3
        this.scene.pushMatrix();
        
        this.scene.translate(5.5, 0, 0.9);
        this.tree3.display();

        this.scene.popMatrix();

        //TREE 4
        this.scene.pushMatrix();

        this.scene.translate(1, 0, 3);
        this.tree4.display();

        this.scene.popMatrix();

        //TREE 5
        this.scene.pushMatrix();
        
        this.scene.translate(3.4, 0, 3.2);
        this.tree5.display();

        this.scene.popMatrix();

        //TREE 6
        this.scene.pushMatrix();
        
        this.scene.translate(5.7, 0, 3.1);
        this.tree6.display();

        this.scene.popMatrix();

        //TREE 7
        this.scene.pushMatrix();

        this.scene.translate(1, 0, 5.5);
        this.tree7.display();

        this.scene.popMatrix();

        //TREE 8
        this.scene.pushMatrix();
        
        this.scene.translate(3.6, 0, 5.4);
        this.tree8.display();

        this.scene.popMatrix();

        //TREE 9
        this.scene.pushMatrix();
        
        this.scene.translate(5.5, 0, 5.3);
        this.tree9.display();

        this.scene.popMatrix();

        // ---- END Primitive drawing section
    }

    updateBuffers(complexity) {
        // Reinitialize buffers
        this.initBuffers();
    }
}