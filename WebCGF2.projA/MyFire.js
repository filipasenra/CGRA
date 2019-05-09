/**
 * MyFire
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyFire extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
    }
    init(scene) {

        this.cone = new MyCone(scene, 10, 10);

    }

    display() {

        //===================================
        //CHAMA
        this.scene.pushMatrix();
        
        this.scene.fireMaterial.setTexture(this.scene.fire);
        this.scene.fireMaterial.apply();

        this.scene.scale(0.8, 2, 0.8);
        this.cone.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0.5, 0.5, 0);
        this.scene.rotate(-Math.PI/6.0, 0, 1, 1);
        this.scene.scale(0.2, 0.5, 0.2);

        this.cone.display();

        this.scene.popMatrix();

        //=========================================

        this.scene.pushMatrix();

        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI/6.0, 1, 1, 1);
        this.scene.scale(0.5, 1, 0.5);

        this.cone.display();

        this.scene.popMatrix();

        //==========================================

        this.scene.pushMatrix();

        this.scene.translate(0, 0.8, -0.1);
        this.scene.rotate(Math.PI/5.0, 0, 0, 1);
        this.scene.scale(0.5, 0.8, 0.5);

        this.cone.display();

        this.scene.popMatrix();

        //=========================================

        this.scene.pushMatrix();

        this.scene.translate(0.1, 0.5, -0.1);
        this.scene.rotate(-Math.PI/6.0, 1, 1, 1);
        this.scene.scale(0.5, 1, 0.5);

        this.cone.display();

        this.scene.popMatrix();

        //=========================================

        this.scene.pushMatrix();

        this.scene.translate(-0.2, 0.5, 0.1);
        this.scene.rotate(Math.PI/4.0, 0, 1, 1);
        this.scene.scale(0.3, 0.8, 0.3);

        this.cone.display();

        this.scene.popMatrix();

        //==========================================

        this.scene.fireMaterial.setTexture(null);
        this.scene.fireMaterial.apply();

    }
}