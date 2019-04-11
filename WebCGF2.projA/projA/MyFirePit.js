/**
 * MyFirePit
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyFirePit extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
    }
    init(scene) {

        this.cone = new MyCone(scene, 10, 10);
        this.base = new MyUnitCubeQuad(scene);

    }

    display() {
        this.scene.pushMatrix();

        this.scene.specularMaterial.setTexture(this.scene.fire);
        this.scene.specularMaterial.apply();

        this.scene.translate(4, 0, 0);
        this.scene.scale(1, 2, 1);
        this.cone.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.specularMaterial.setTexture(this.scene.paredes);
        this.scene.specularMaterial.apply();

        this.scene.rotate(Math.PI/2.0, 1, 0, 0);
        this.scene.translate(4, 0, -0.3);
        this.scene.scale(2.3, 2.3, 0.3);

        this.base.display();

        this.scene.popMatrix();

        this.scene.specularMaterial.setTexture(null);
        this.scene.specularMaterial.apply();
    }

    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
    }
}