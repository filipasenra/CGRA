/**
 * MyCylinderWBottow
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyCylinderWBottow extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
    }
    init(scene) {

        this.base = new MyCircle(scene, 20);
        this.border = new MyCylinder(scene, 20);
    }

    display() {
        this.border.display();

        this.scene.pushMatrix();

        this.scene.translate(0, 1, 0);
        this.base.display();

        this.scene.popMatrix();
    }
}