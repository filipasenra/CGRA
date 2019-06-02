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

        this.triangle = new MyTriangle(this.scene);

        this.leafMaterial = new CGFappearance(this.scene);
        this.leafMaterial.setAmbient(0.3, 0.3, 0.3, 1);
        this.leafMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
        this.leafMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.leafMaterial.setShininess(120);
        this.leafMaterial.loadTexture('texturas/folhas.jpg');

        this.leaf = new CGFtexture(this.scene, 'texturas/folhas.jpg');

    }

    display(){

        this.leafMaterial.setTexture(this.leaf);
        this.leafMaterial.apply();

        this.scene.scale(2, 2, 2);
        this.triangle.display();

        this.leafMaterial.setTexture(null);
        this.leafMaterial.apply();
    }
}
