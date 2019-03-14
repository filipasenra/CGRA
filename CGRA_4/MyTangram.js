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

        this.green = new CGFappearance(scene);
        this.green.setAmbient(0, 1, 0, 1.0);
        this.green.setDiffuse(0, 1, 0, 1.0);
        this.green.setSpecular(1, 1, 1, 1.0);
        this.green.setShininess(10.0);

        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(1, 156 / 255.0, 0, 1.0);
        this.orange.setDiffuse(1, 156 / 255.0, 0, 1.0);
        this.orange.setSpecular(1, 1, 1, 1.0);
        this.orange.setShininess(10.0);

        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0, 156 / 255.0, 1, 1.0);
        this.blue.setDiffuse(0, 156 / 255.0, 1, 1.0);
        this.blue.setSpecular(1, 1, 1, 1.0);
        this.blue.setShininess(10.0);

        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(170/255.0, 79 / 255.0, 194/255.0, 1.0);
        this.purple.setDiffuse(170/255.0, 79 / 255.0, 194/255.0, 1.0);
        this.purple.setSpecular(1, 1, 1, 1.0);
        this.purple.setShininess(10.0);

        this.red = new CGFappearance(scene);
        this.red.setAmbient(1.0, 20 / 255.0, 20/255.0, 1.0);
        this.red.setDiffuse(1.0, 20 / 255.0, 20/255.0, 1.0);
        this.red.setSpecular(1, 1, 1, 1.0);
        this.red.setShininess(10.0);

        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(1.0, 156 / 255.0, 210/255.0, 1.0);
        this.pink.setDiffuse(1.0, 156 / 255.0, 210/255.0, 1.0);
        this.pink.setSpecular(1, 1, 1, 1.0);
        this.pink.setShininess(10.0);

        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(1.0, 1.0, 0, 1.0);
        this.yellow.setDiffuse(1.0, 1.0, 0, 1.0);
        this.yellow.setSpecular(1, 1, 1, 1.0);
        this.yellow.setShininess(10.0);

    }

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangleSmall2.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleBig2.enableNormalViz();
        this.parallelogram.enableNormalViz();
    }

    display() {

        this.scene.pushMatrix();
        this.green.apply();

        //alteration diamond
        var rot = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            2.10, 0.7, 0.0, 1.0];

        var transl = [Math.cos(Math.PI / 4), -Math.sin(Math.PI / 4), 0.0, 0.0,
        Math.sin(Math.PI / 4), Math.cos(Math.PI / 4), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0];

        this.scene.multMatrix(rot);
        this.scene.multMatrix(transl);
       // this.scene.rotate(Math.PI / 4, 0, 0, 1);

        this.diamond.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.blue.apply();
        //alteration triangle big
        this.scene.translate(1.40, -1.40, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);

        this.triangleBig.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.orange.apply();
        this.scene.translate(-1.40, -0.25, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);

        this.triangleBig2.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //alteration triangle small

        this.scene.translate(2.4, 1.40, 0);
        this.red.apply();

        this.triangleSmall.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(2.30, -1.50, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.purple.apply();

        this.triangleSmall2.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //alteration triangle
        this.scene.translate(-1.40, 1.15, 0);
        this.scene.rotate(-3 * Math.PI / 4, 0, 0, 1);
        this.pink.apply();

        this.triangle.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //alteration parallelogram
        this.scene.translate(-2.8, 1.15, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.yellow.apply();

        this.parallelogram.display();

        this.scene.popMatrix();

        // ---- END Primitive drawing section
    }

    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

