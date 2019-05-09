// JavaScript source code
/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyBird extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
    }
    init(scene) {

        this.head_body = new MySphere(scene, 20, 20);
        this.beak = new MyCone(scene, 5, 5);
        this.eye = new MyCylinderWBottow(scene, 5);
        this.wingBase = new Plane(scene, 10);
        this.wingTip = new MyTriangle(scene);

        // ---- END Primitive drawing section
    }

    display() {

        //HEAD
        this.scene.pushMatrix();

        this.scene.scale(0.6, 0.6, 1);
        this.head_body.display();

        this.scene.popMatrix();


        //BEAK
        this.scene.pushMatrix();

        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(-Math.PI * 0.5, 1, 0, 0);
        this.scene.scale(0.4, 1, 0.4);
        this.beak.display();

        this.scene.popMatrix();

        //EYES
        this.scene.pushMatrix();
        
        this.scene.translate(-0.5, 0, -0.6);
        this.scene.rotate(Math.PI/2.5, 0, 1, 0);
        this.scene.rotate(Math.PI * 0.5, 1, 0, 0);
        this.scene.scale(0.2, 0.1, 0.2);
        this.eye.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();
        
        this.scene.translate(0.5, 0, -0.6);
        this.scene.rotate(-Math.PI/2.5, 0, 1, 0);
        this.scene.rotate(Math.PI * 0.5, 1, 0, 0);
        this.scene.scale(0.2, 1, 0.2);
        this.eye.display();

        this.scene.popMatrix();

        //BODY
        this.scene.pushMatrix();

        this.scene.translate(0, 0, 1.6);
        this.scene.rotate(Math.PI * 0.5, 1, 0, 0);
        this.scene.scale(1, 1.7, 1);
        this.head_body.display();

        this.scene.popMatrix();

        //WINGS

        this.scene.pushMatrix();

        this.scene.rotate(-Math.PI/10, 0, 0, 1);

        this.scene.pushMatrix();

        this.scene.translate(-1.5, 0, 1.5);
        this.scene.rotate(-Math.PI*0.5, 1, 0, 0);
        this.scene.scale(1.2, 1.6, 1);
        this.wingBase.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(-2.1, 0, 1.5);
        this.scene.scale(1, 1, 0.6);
        this.scene.rotate(Math.PI/6, 0, 0, 1);
        this.scene.rotate(-Math.PI/4, 0, 1, 0);
        this.scene.rotate(-Math.PI*0.5, 1, 0, 0);
        this.wingTip.display();

        this.scene.popMatrix();

        this.scene.popMatrix();

        //====================================


        this.scene.pushMatrix();

        this.scene.rotate(Math.PI/10, 0, 0, 1);

        this.scene.pushMatrix();

        this.scene.translate(1.5, 0, 1.5);
        this.scene.rotate(-Math.PI*0.5, 1, 0, 0);
        this.scene.scale(1.2, 1.6, 1.3);
        this.wingBase.display();

        this.scene.popMatrix();


        this.scene.pushMatrix();

        this.scene.translate(2.1, 0, 1.5);
        this.scene.scale(1, 1, 0.6);
        this.scene.rotate(-Math.PI/6, 0, 0, 1);
        this.scene.rotate(Math.PI-Math.PI/4, 0, 1, 0);
        this.scene.rotate(-Math.PI*0.5, 1, 0, 0);
        this.wingTip.display();

        this.scene.popMatrix();

        this.scene.popMatrix();
    }

    updateBuffers(complexity) {
        // Reinitialize buffers
        this.initBuffers();
    }
}