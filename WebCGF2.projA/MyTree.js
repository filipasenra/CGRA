/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTree extends CGFobject {

    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius) {
        super(scene);
        this.init(scene);
        this.trunkHeight = trunkHeight;
        this.treeTopHeight = treeTopHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopRadius = treeTopRadius;
    }
    init(scene) {

        this.cone = new MyCone(scene, 10, 10);
        this.cylinder = new MyCylinder(scene, 10, 10);

    }

    display() {

        //===================================
        //CYLINDER
        this.scene.pushMatrix();

        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);

        this.scene.difuseMaterial.setTexture(this.scene.wood);
        this.scene.difuseMaterial.apply();
        this.cylinder.display();

        this.scene.popMatrix();

        //===================================
        //CONE
        this.scene.pushMatrix();

        this.scene.difuseMaterial.setTexture(this.scene.leaves);
        this.scene.difuseMaterial.apply();
        this.scene.translate(0, this.trunkHeight, 0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        
        this.cone.display();

        this.scene.popMatrix();

        this.scene.difuseMaterial.setTexture(null);
        this.scene.difuseMaterial.apply();
    }
}