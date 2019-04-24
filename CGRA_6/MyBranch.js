/**
* MyBranch
* @constructor
*/

class MyBranch extends CGFobject {
    constructor(scene) {

        super(scene);
        this.initBuffers();

    }

    initBuffers() {
        
        this.scene.branchMaterial = new CGFappearance(this);
        this.scene.branchMaterial.setAmbient(0.3, 0.3, 0.3, 1);
        this.scene.branchMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.scene.branchMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.scene.branchMaterial.setShininess(10.0);
        this.scene.branchMaterial.loadTexture('texturas/tronco.jpg');
        this.scene.branchMaterial.setTextureWrap('MIRRORED_REPEAT', 'MIRRORED_REPEAT');

        this.cylinder = new MyCylinder(this.scene, 4);
        
    }

    display(){

        
        this.scene.branchMaterial.setTexture(this.scene.tronco);
        this.scene.branchMaterial.apply();

        this.cylinder.display();


        this.scene.branchMaterial.setTexture(null);
        this.scene.branchMaterial.apply();
    }
}
