/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTangram extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
    }
    init(scene) {

        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParellelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleSmall2 = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.triangleBig2 = new MyTriangleBig(scene);
    }

    display() {

        this.scene.pushMatrix();

        //alteration diamond
        this.scene.translate(2.10, 0.70, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);

        this.diamond.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //alteration triangle big
        this.scene.translate(1.40, -1.40, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);

        this.triangleBig.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-1.40, -0.25, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);

        this.triangleBig2.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //alteration traingle small

        this.scene.translate(2.4, 1.40, 0);

        this.triangleSmall.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(2.30, -1.50, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.triangleSmall2.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //alteration triangle
        this.scene.translate(-1.40, 1.15, 0);
        this.scene.rotate(-3 * Math.PI / 4, 0, 0, 1);

        this.triangle.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //alteration parallelogram
        this.scene.translate(-2.8, 1.15, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.rotate(Math.PI, 1, 0, 0);

        this.parallelogram.display();

        this.scene.popMatrix();

        // ---- END Primitive drawing section
    }
}

