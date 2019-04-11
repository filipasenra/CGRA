// JavaScript source code
/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyHouse extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
    }
    init(scene) {

        this.cube = new MyUnitCubeQuad(scene);
        this.pyramid = new MyPyramid(scene, 4, 1);

        this.prism = new MyPrism(scene, 6, 1);
        this.prism1 = new MyPrism(scene, 6, 1);
        this.prism2 = new MyPrism(scene, 6, 1);
        this.prism3 = new MyPrism(scene, 6, 1);

    }

    display() {

        this.scene.pushMatrix();

        this.scene.quadMaterial.setTexture(this.scene.postes);
        this.scene.quadMaterial.apply();

        this.scene.translate(0.75, 0, -0.75);
        this.scene.scale(0.25, 1.15, 0.25);
        this.prism.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0.75, 0, 0.75);
        this.scene.scale(0.25, 1.15, 0.25);
        this.prism1.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-0.75, 0, -0.75);
        this.scene.scale(0.25, 1.15, 0.25);
        this.prism2.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-0.75, 0, 0.75);
        this.scene.scale(0.25, 1.15, 0.25);
        this.prism3.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0, 1.1, 0);
        this.scene.scale(1.5, 1.5, 1.5);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);

        this.scene.quadMaterial.setTexture(this.scene.telhado);
        this.scene.quadMaterial.apply();
        this.pyramid.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.quadMaterial.setTexture(this.scene.paredes);
        this.scene.quadMaterial.apply();

        this.scene.translate(0, 0.6, -0.6);
        this.scene.scale(1.15, 1.15, 1.15);
        
        this.cube.display();

        this.scene.popMatrix();

        this.scene.quadMaterial.setTexture(null);
        this.scene.quadMaterial.apply();


        // ---- END Primitive drawing section
    }

    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
    }
}