// JavaScript source code
/**
 * MyBunchOfTwigs
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyBunchOfTwigs extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);

    }
    init(scene) {

        this.branch = new MyTreeBranch(scene);

        this.array = [10];

        this.array_translate = [10];

        for (var i = 0; i < 40; i++) {

            this.array[i] =  Math.PI / (Math.random() % 6 + 1);
            this.array_translate[i] =  (Math.random() % 3 + 1);

        }

    }

    display() {


        for (var i = 0; i < 10; i++) {

            this.scene.pushMatrix()

            this.scene.translate(this.array_translate[i], 2, this.array_translate[i]);
            this.scene.rotate(this.array[i], 0, 1, 0);
            this.scene.rotate(this.array[19-i]*0.1, 1, 0, 1);
            this.branch.display();

            this.scene.popMatrix();

        }

    }
}