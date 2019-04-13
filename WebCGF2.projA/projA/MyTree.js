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

        this.scene.pushMatrix();

        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);

        this.scene.difuseMaterial.setTexture(this.scene.tronco);
        this.scene.difuseMaterial.apply();
        this.cylinder.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.difuseMaterial.setTexture(this.scene.folhas);
        this.scene.difuseMaterial.apply();
        this.scene.translate(0, this.trunkHeight, 0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        
        this.cone.display();

        this.scene.popMatrix();

        this.scene.difuseMaterial.setTexture(null);
        this.scene.difuseMaterial.apply();


        
        // ---- END Primitive drawing section
    }

    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
    }
}