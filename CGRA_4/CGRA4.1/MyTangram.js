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

        this.scene.quadMaterial.setTexture(this.scene.textures[3])
        this.scene.quadMaterial.apply();

        //=======================================================================
        //DIAMOND

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

        this.textCoordDiamond = [
            0, 0.5,
            0.25, 0.75,
            0.25, 0.25,
            0.5, 0.5,

            0, 0.5,
            0.25, 0.75,
            0.25, 0.25,
            0.5, 0.5
        ];

        this.diamond.updateTexCoords(this.textCoordDiamond);
        this.diamond.display();

        //=======================================================================
        //END OF DIAMOND

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //=======================================================================
        //TRIANGLE BIG 1

        this.scene.translate(1.40, -1.40, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);

        this.textCoordTriBig1 = [
            1, 0,
			0.5, 0.5, 
			1, 1,

			1, 0,
			0.5, 0.5, 
			1, 1
        ];

        this.triangleBig.updateTexCoords(this.textCoordTriBig1);
        this.triangleBig.display();

        //=======================================================================
        //END OF TRIANGLE BIG 1

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //=======================================================================
        //TRIANGLE BIG 2

        this.scene.translate(-1.40, -0.25, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);

        this.textCoordTriBig2 = [
            0, 0,
			0.5, 0.5, 
			1, 0,

			0, 0,
			0.5, 0.5, 
			1, 0
        ];

        this.triangleBig2.updateTexCoords(this.textCoordTriBig2);
        this.triangleBig2.display();

        //=======================================================================
        //END OF TRIANGLE BIG 2

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //=======================================================================
        //TRIANGLE SMALL 1

        this.scene.translate(2.4, 1.40, 0);

        this.textCoordSmall1 = [
            0, 0,
			0.25, 0.25,
			0, 0.5,

			0, 0,
			0.25, 0.25,
			0, 0.5
        ];

        this.triangleSmall.updateTexCoords(this.textCoordSmall1);
        this.triangleSmall.display();

        //=======================================================================
        //END OF TRIANGLE SMALL 2

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //=======================================================================
        //TRIANGLE SMALL 2

        this.scene.translate(2.30, -1.50, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);

        this.textCoordSmall2 = [
            0.25, 0.75,
			0.5, 0.5, 
			0.75, 0.75,

			0.25, 0.75,
			0.5, 0.5, 
			0.75, 0.75
        ];

        this.triangleSmall2.updateTexCoords(this.textCoordSmall2);
        this.triangleSmall2.display();

        //=======================================================================
        //END OF TRIANGLE SMALL 2

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //=======================================================================
        //TRIANGLE

        this.scene.translate(-1.40, 1.15, 0);
        this.scene.rotate(-3 * Math.PI / 4, 0, 0, 1);

        this.textCoordTri = [
            0, 0.5,
			0.5, 1,
			0, 1,

			0, 0.5,
			0.5, 1,
			0, 1
        ];

        this.triangle.updateTexCoords(this.textCoordTri);
        this.triangle.display();

        //=======================================================================
        //END OF TRIANGLE

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //=======================================================================
        //PARALLELOGRAM

        this.scene.translate(-2.8, 1.15, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.rotate(Math.PI, 1, 0, 0);

        this.textCoordParal = [
            1, 1,
			0.5, 1,
			0.75, 0.75,
			0.25, 0.75,

			1, 1,
			0.5, 1,
			0.75, 0.75,
			0.25, 0.75,
        ];

        this.parallelogram.updateTexCoords(this.textCoordParal);
        this.parallelogram.display();

        //=======================================================================
        //END OF PARALLELOGRAM

        this.scene.popMatrix();
        this.scene.updateAppliedTexture();
    }

    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

