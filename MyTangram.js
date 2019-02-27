/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */

serialInclude(['../lib/CGF.js', 'MyDiamond.js','MyInterface.js', 'MyTriangle.js', 'MyParallelogram.js', 'MyTriangleSmall.js', 'MyTriangleBig.js', 'MyTangram.js',

class MyTangram extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init();
    }
    init() {

       

       /* //Initialize scene objects
        this.diamond = new MyDiamond(this);
        this.triangle = new MyTriangle(this);
        this.parallelogram = new MyParellelogram(this);
        this.triangleSmall = new MyTriangleSmall(this);
        this.triangleSmall2 = new MyTriangleSmall(this);
        this.triangleBig = new MyTriangleBig(this);
        this.triangleBig2 = new MyTriangleBig(this);

        //Objects connected to MyInterface
        this.displayDiamond = true;
        this.displayTriangle = true;
        this.displayParallelogram = true;
        this.displayTriangleSmall = true;
        this.displayTriangleSmall2 = true;
        this.displayTriangleBig = true;
        this.displayTriangleBig2 = true;*/
    }

    display() {

        /*this.pushMatrix();

        //alteration diamond
        this.scene.translate(2.10, 0.70, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);

        if (this.displayDiamond)
            this.diamond.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //alteration triangle big
        this.scene.translate(1.40, -1.40, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);

        if (this.displayTriangleBig)
            this.triangleBig.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-1.40, -0.25, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);

        if (this.displayTriangleBig2)
            this.triangleBig2.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //alteration traingle small

        this.scene.translate(2.4, 1.40, 0);

        if (this.displayTriangleSmall)
            this.triangleSmall.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(2.30, -1.50, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);

        if (this.displayTriangleSmall2)
            this.triangleSmall2.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //alteration triangle
        this.scene.translate(-1.40, 1.15, 0);
        this.scene.rotate(-3 * Math.PI / 4, 0, 0, 1);

        if (this.displayTriangle)
            this.triangle.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //alteration parallelogram
        this.scene.translate(-2.8, 1.15, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.rotate(Math.PI, 1, 0, 0);

        if (this.displayParallelogram)
            this.parallelogram.display();

        // ---- END Primitive drawing section*/
    }
}

