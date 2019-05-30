// JavaScript source code
/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyNest extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);

    }
    init(scene) {

        this.branch = new MyBunchOfTwigs(scene);

    }

    display() {

        this.scene.pushMatrix();

        this.scene.scale(0.7,0.7,0.7);

        this.branch.display();
        this.scene.rotate(Math.PI/2, 0, 1, 0);

        this.branch.display();
        this.scene.rotate(Math.PI/2, 0, 1, 0);


        this.branch.display();
        this.scene.rotate(Math.PI/2, 0, 1, 0);

        this.branch.display();

        this.scene.popMatrix();

    }
}