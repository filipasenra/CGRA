/**
 * MyPool
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyPool extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
    }
    init(scene) {

        this.base = new MyQuad(scene);
        this.border = new MyUnitCubeQuad(scene);
    }

    display() {

        //Water

        this.scene.pushMatrix();

        this.scene.specularMaterial.setTexture(this.scene.water);
        this.scene.specularMaterial.apply();

        this.scene.translate(0, 0.8, 0);
        this.scene.scale(4, 1, 2);
        this.scene.rotate(-Math.PI/2.0, 1, 0, 0);
        this.base.display();

        this.scene.popMatrix();

        //=========================================
        //Border

        this.scene.pushMatrix();

        this.scene.difuseMaterial.setTexture(this.scene.pillars);
        this.scene.difuseMaterial.apply();

        this.scene.translate(0, 0.5, 1);
        this.scene.scale(4, 1, 0.3);
        
        this.border.display();

        this.scene.popMatrix();

        //==========================================

        this.scene.pushMatrix();

        this.scene.translate(0, 0.5, -1);
        this.scene.scale(4, 1, 0.3);
        
        this.border.display();

        this.scene.popMatrix();

        //===========================================

        this.scene.pushMatrix();

        this.scene.translate(2.15, 0.5, -1);
        this.scene.scale(0.3, 1, 2.3);
        
        this.border.display();

        this.scene.popMatrix();

        //===========================================

        this.scene.pushMatrix();

        this.scene.translate(-2.15, 0.5, -1);
        this.scene.scale(0.3, 1, 2.3);
        
        this.border.display();

        this.scene.popMatrix();

        //===========================================

        this.scene.difuseMaterial.setTexture(null);
        this.scene.difuseMaterial.apply();
    }

    updateBuffers(complexity) {
        // Reinitialize buffers
        this.initBuffers();
    }
}