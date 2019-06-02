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
        
    }

    display(){

        this.scene.leafMaterial.apply();

        this.triangle.display();
    }
}
