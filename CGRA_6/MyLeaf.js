/**
* MyLeaf
* @constructor
*/

class MyLeaf extends CGFobject {
    constructor(scene) {

        super(scene);
        this.initBuffers();

    }

    initBuffers() {
        
        this.scene.leafMaterial = new CGFappearance(this);
        this.scene.leafMaterial.setAmbient(0.3, 0.3, 0.3, 1);
        this.scene.leafMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.scene.leafMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.scene.leafMaterial.setShininess(10.0);
        this.scene.leafMaterial.loadTexture('texturas/folhas.jpg');
        this.scene.leafMaterial.setTextureWrap('MIRRORED_REPEAT', 'MIRRORED_REPEAT');

        this.triangle = new MyTriangle(this.scene);
        
    }

    display(){

        
        this.scene.leafMaterial.setTexture(this.scene.tronco);
        this.scene.leafMaterial.apply();

        this.triangle.display();


        this.scene.leafMaterial.setTexture(null);
        this.scene.leafMaterial.apply();
    }
}
