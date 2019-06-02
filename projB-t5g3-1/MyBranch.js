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

        this.cylinder = new MyCylinder(this.scene, 4);


        this.branchMaterial = new CGFappearance(this.scene);
        this.branchMaterial.setAmbient(0.3, 0.3, 0.3, 1);
        this.branchMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.branchMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.branchMaterial.setShininess(10.0);
        this.branchMaterial.loadTexture('texturas/tronco.jpg');
        this.branchMaterial.setTextureWrap('MIRRORED_REPEAT', 'MIRRORED_REPEAT');

        this.wood = new CGFtexture(this.scene, 'texturas/tronco.jpg');
        
    }

    display(){

        this.branchMaterial.setTexture(this.wood);
        this.branchMaterial.apply();

        this.cylinder.display();

        this.branchMaterial.setTexture(null);
        this.branchMaterial.apply();
    }
}
