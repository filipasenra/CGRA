/**
* MyModifiedQuad
* @constructor
*/

class MyModifiedQuad extends CGFobject {
    constructor(scene) {

        super(scene);
        this.initBuffers();

    }

    initBuffers() {

        this.quad = new MyQuad(this.scene);
        
    }

    display(){
        this.scene.pushMatrix();
        this.scene.scale(0.1,1,0.1);
        this.scene.translate(0,0.5,0);
        this.quad.display();
        this.scene.popMatrix();
    }
}
