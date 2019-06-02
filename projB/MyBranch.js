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
        
    }

    display(){

        
        this.scene.branchMaterial.apply();

        this.cylinder.display();
    }
}
