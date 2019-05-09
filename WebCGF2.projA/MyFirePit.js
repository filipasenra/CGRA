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

        this.fire = new MyFire(scene, 10, 10);
        this.base = new MyUnitCubeQuad(scene);
        this.log = new MyCylinderWBottow(scene);

    }

    display() {

        //===================================
        //FIRE
        this.scene.pushMatrix();

        this.scene.translate(4, 0, 0);
        this.fire.display();

        this.scene.popMatrix();

        //===================================
        //BASE
        this.scene.pushMatrix();

        this.scene.specularMaterial.setTexture(this.scene.walls);
        this.scene.specularMaterial.apply();

        this.scene.rotate(Math.PI/2.0, 1, 0, 0);
        this.scene.translate(4, 0, -0.3);
        this.scene.scale(2.3, 2.3, 0.3);

        this.base.display();

        this.scene.popMatrix();

        //======================================
        //WOOD

        this.scene.pushMatrix();

        this.scene.specularMaterial.setTexture(this.scene.wood);
        this.scene.specularMaterial.apply();

        this.scene.translate(4, 0.4, 0);
        this.scene.rotate(Math.PI/1.3, 1, 1, 0);
        this.scene.scale(0.2, 1, 0.2);

        this.log.display();

        this.scene.popMatrix();

        //=======================

        this.scene.pushMatrix();

        this.scene.translate(4, 0.4, 0);
        this.scene.rotate(-Math.PI/1.3, 0, 1, 1);
        this.scene.scale(0.2, 1, 0.2);

        this.log.display();

        this.scene.popMatrix();

        //=======================

        this.scene.pushMatrix();

        this.scene.translate(4, 0.8, 0);
        this.scene.rotate(Math.PI/1.6, 0, 0, 1);
        this.scene.scale(0.2, 1, 0.2);

        this.log.display();

        this.scene.popMatrix();

        //============================================

        this.scene.specularMaterial.setTexture(null);
        this.scene.specularMaterial.apply();
    }

}