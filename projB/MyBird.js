// JavaScript source code
/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */

const STANDARD_HEIGHT = 7;
const BIRD_X = 1.5;
const BIRD_Y = 3;
const DESCENT_VALUE = ((STANDARD_HEIGHT - 1) / 1000.0);

class MyBird extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);
    }
    init(scene) {

        this.rotation = 0;
        this.velocity = 0;
        this.x = 0;
        this.y = STANDARD_HEIGHT;
        this.z = 0;
        this.degrees = 0;

        this.head_body = new MySphere(scene, 20, 20);
        this.beak = new MyCone(scene, 5, 5);
        this.eye = new MyCylinderWBottow(scene, 5);
        this.wingBase = new Plane(scene, 10);
        this.wingTip = new MyTriangle(scene);

        this.branch = null;

        this.descend = false;
        this.ascend = false;
        this.initDescent = 0;

        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(1.0, 1.0, 0, 1.0);
        this.yellow.setDiffuse(1.0, 1.0, 0, 1.0);
        this.yellow.setSpecular(1, 1, 1, 1.0);
        this.yellow.setShininess(10.0);

        this.black = new CGFappearance(scene);
        this.black.setAmbient(0, 0, 0, 0);
        this.black.setDiffuse(0, 0, 0, 0);
        this.black.setSpecular(0, 0, 0, 0);
        this.black.setShininess(10.0);

        // ---- END Primitive drawing section
    }

    display() {

        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);

        this.scene.rotate(this.rotation, 0, 1, 0);

        this.scene.translate(0, 0, -1);

        this.scene.pushMatrix();

        //HEAD
        this.scene.pushMatrix();
        this.scene.difuseMaterial.setTexture(this.scene.penas);
        this.scene.difuseMaterial.apply();

        this.scene.scale(0.6, 0.6, 1);
        this.head_body.display();

        this.scene.popMatrix();


        //BEAK
        this.scene.pushMatrix();


        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(-Math.PI * 0.5, 1, 0, 0);
        this.scene.scale(0.4, 1, 0.4);
        this.yellow.apply();
        this.beak.display();

        this.scene.popMatrix();

        //EYES
        this.scene.pushMatrix();

        this.black.apply();
        this.scene.translate(-0.5, 0, -0.6);
        this.scene.rotate(Math.PI / 2.5, 0, 1, 0);
        this.scene.rotate(Math.PI * 0.5, 1, 0, 0);
        this.scene.scale(0.2, 0.1, 0.2);
        this.eye.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0.05, 0, -0.5);
        this.scene.rotate(-Math.PI / 2.5, 0, 1, 0);
        this.scene.rotate(Math.PI * 0.5, 1, 0, 0);
        this.scene.scale(0.2, 1, 0.2);
        this.eye.display();

        this.scene.popMatrix();

        //BODY
        this.scene.pushMatrix();

        this.scene.difuseMaterial.setTexture(this.scene.penas);
        this.scene.difuseMaterial.apply();

        this.scene.translate(0, 0, 1.6);
        this.scene.rotate(Math.PI * 0.5, 1, 0, 0);
        this.scene.scale(1, 1.7, 1);
        this.head_body.display();

        this.scene.popMatrix();

        //WINGS

        this.scene.pushMatrix();

        this.scene.rotate(-Math.PI / 10 + Math.sin(this.degrees), 0, 0, 1);

        this.scene.pushMatrix();

        this.scene.translate(-1.5, 0, 1.5);
        this.scene.rotate(-Math.PI * 0.5, 1, 0, 0);
        this.scene.scale(1.2, 1.6, 1);

        this.scene.difuseMaterial.setTexture(this.scene.penas);
        this.scene.difuseMaterial.apply();

        this.wingBase.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(-2.1, 0, 1.5);
        this.scene.scale(1, 1, 0.6);
        this.scene.rotate(Math.PI / 6, 0, 0, 1);
        this.scene.rotate(-Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI * 0.5, 1, 0, 0);

        this.black.apply();
        this.wingTip.display();

        this.scene.popMatrix();

        this.scene.popMatrix();

        //====================================


        this.scene.pushMatrix();

        this.scene.rotate(Math.PI / 10 - Math.sin(this.degrees), 0, 0, 1);

        this.scene.pushMatrix();

        this.scene.translate(1.5, 0, 1.5);
        this.scene.rotate(-Math.PI * 0.5, 1, 0, 0);
        this.scene.scale(1.2, 1.6, 1.3);

        this.scene.difuseMaterial.setTexture(this.scene.penas);
        this.scene.difuseMaterial.apply();

        this.wingBase.display();

        this.scene.popMatrix();


        this.scene.pushMatrix();

        this.scene.translate(2.1, 0, 1.5);
        this.scene.scale(1, 1, 0.6);
        this.scene.rotate(-Math.PI / 6, 0, 0, 1);
        this.scene.rotate(Math.PI - Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI * 0.5, 1, 0, 0);

        /*this.scene.difuseMaterial.setTexture(this.scene.penasPretas);
        this.scene.difuseMaterial.apply();*/
        this.black.apply();

        this.wingTip.display();

        this.scene.popMatrix();

        this.scene.popMatrix();

        this.scene.popMatrix();

        this.scene.popMatrix();;

        if (this.branch != null) {
            this.scene.pushMatrix();

            this.branch.setCoordinates(this.x, this.y - 1.2, this.z);
            this.branch.setRotation(this.rotation);
            this.branch.display();

            this.scene.popMatrix();
        }
    }

    updateBuffers(complexity) {
        // Reinitialize buffers
        this.initBuffers();
    }

    updateDownMovement(v){

        if (this.descend == true) {

            if (this.initDescent == 0) {
                this.initDescent = v;
            }

            this.y = STANDARD_HEIGHT - DESCENT_VALUE * (v - this.initDescent);

            if (this.y < 1) {
                this.descend = false;
                this.ascend = true;
            }

        } else if (this.ascend) {
            this.y = DESCENT_VALUE * (v - this.initDescent) - STANDARD_HEIGHT;

            if (this.y > STANDARD_HEIGHT) {
                this.ascend = false;
                this.initDescent = 0;
            }

        }

    }

    updatePosition(v) {

        if (this.updateDownMovement(v));

        this.degrees = Math.sin(v / (1000 / (2 * Math.PI)));

        if (this.velocity != 0 || this.descend || this.ascend) {
            this.x -= Math.sin(this.rotation) * this.velocity;
            this.z -= Math.cos(this.rotation) * this.velocity;
            
            if(!this.descend && !this.ascend)
                this.y = this.degrees*0.4 + STANDARD_HEIGHT;
        } else {
            this.y = this.degrees + STANDARD_HEIGHT;
        }
    }

    turn(v) {
        this.rotation += v;
    }

    accelerate(v) {

        this.velocity += v;
    }

    reset() {
        this.rotation = 0;
        this.velocity = 0;
        this.x = 0;
        this.y = STANDARD_HEIGHT;
        this.z = 0;
    }

    addBranch(branch) {

        if (this.branch == null) {
            this.branch = branch;
        }
    }

    hasBranch() {

        return this.branch != null;
    }

    removeBranch() {

        var branch_tmp = this.branch;
        this.branch = null;

        return branch_tmp;
    }

    getBranch() {
        return this.branch;
    }

    startDescend() {

        if (this.descend == false && this.ascend == false) {
            this.descend = true;
        }

    }

    checkCollision(object) {

        if (object.getX() > (this.x + BIRD_X) || object.getX() < (this.x - BIRD_X))
            return false;

        if (object.getZ() > (this.z + BIRD_Y) || object.getZ() < (this.z - BIRD_Y))
            return false;

        if (this.y < 1.5 && this.y > 1)
            return true;

        return false;

    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getZ() {
        return this.z;
    }
}