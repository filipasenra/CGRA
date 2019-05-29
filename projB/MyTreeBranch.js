// JavaScript source code
/**
 * MyTreeBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTreeBranch extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);

    }
    init(scene) {

        this.cylinder = new MyCylinderWBottow(scene);


        this.appearance = new CGFappearance(this.scene);
        this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.appearance.setShininess(120);
        this.appearance.loadTexture('texturas/tronco.jpg');

    }

    display(){

        this.appearance.apply();

        this.scene.pushMatrix();

        this.scene.scale(0.2, 0.2, 4);
        this.scene.rotate(Math.PI/2, 1, 1 , 0);

        this.cylinder.display();

        this.scene.popMatrix();
    }
}