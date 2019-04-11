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

        this.scene.quadMaterial.setTexture(this.scene.tronco);
        this.scene.quadMaterial.apply();
        this.cylinder.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.quadMaterial.setTexture(this.scene.folhas);
        this.scene.quadMaterial.apply();
        this.scene.translate(0, this.trunkHeight, 0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        
        this.cone.display();

        this.scene.popMatrix();

        this.scene.quadMaterial.setTexture(null);
        this.scene.quadMaterial.apply();


        
        // ---- END Primitive drawing section
    }

    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
    }
}