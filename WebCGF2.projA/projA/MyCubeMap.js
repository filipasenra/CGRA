/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers(scene);
    }
    initBuffers(scene) {

        this.cube = new MyUnitCube(scene);

    }

    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }

    display() {
        this.scene.pushMatrix();

        this.scene.quadMaterial.setTexture(this.scene.dia);
        this.scene.quadMaterial.apply();

        this.scene.scale(30, 30, 30);

        this.cube.display();

        this.scene.popMatrix();

    }
}

