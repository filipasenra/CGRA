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

        this.branch = new MyTreeBranch(scene);

    }

    display() {

        this.scene.pushMatrix();

        this.scene.scale(0.5,1,0.5);

        for (var i = 0; i < 20; i++) {

            this.scene.rotate(Math.PI / 12, 0, 1, 0);
            this.branch.display();

        }

        this.scene.popMatrix();
    }
}